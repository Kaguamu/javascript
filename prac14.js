// Movie Search App
const app = document.createElement("div");
app.id = "movieApp";
document.body.appendChild(app);

// --- UI Elements ---
const title = document.createElement("h1");
title.textContent = "🎬 Movie Finder";
const input = document.createElement("input");
input.placeholder = "Search movie...";
const button = document.createElement("button");
button.textContent = "Search";
const results = document.createElement("div");
results.className = "results";

app.append(title, input, button, results);

// --- Styles ---
const style = document.createElement("style");
style.textContent = `
  #movieApp { font-family: 'Poppins', sans-serif; padding: 20px; color: #222; }
  input { padding: 10px; width: 250px; border-radius: 8px; border: 1px solid #ccc; }
  button { margin-left: 10px; padding: 10px 20px; background: #007bff; color: white;
           border: none; border-radius: 8px; cursor: pointer; transition: 0.3s; }
  button:hover { background: #0056b3; }
  .movie { background: #f4f4f4; border-radius: 10px; padding: 15px; margin: 10px 0;
           display: flex; align-items: center; gap: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
  .movie img { width: 80px; border-radius: 6px; }
  .movie h3 { margin: 0; }
  .movie p { margin: 5px 0 0; color: #555; }
`;
document.head.appendChild(style);

// --- API Config ---
const API_URL = "https://www.omdbapi.com/";
const API_KEY = "demo"; // Replace with your key for real use

// --- Local Storage Helpers ---
const saveCache = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const loadCache = (key) => JSON.parse(localStorage.getItem(key)) || null;

// --- Fetch Movies ---
async function fetchMovies(query) {
  const cacheKey = `movies_${query.toLowerCase()}`;
  const cached = loadCache(cacheKey);
  if (cached) {
    console.log("Loaded from cache:", query);
    displayMovies(cached);
    return;
  }

  try {
    results.innerHTML = "<p>Loading...</p>";
    const res = await fetch(`${API_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    if (data.Response === "False") throw new Error(data.Error);
    saveCache(cacheKey, data.Search);
    displayMovies(data.Search);
  } catch (err) {
    results.innerHTML = `<p style="color:red;">❌ ${err.message}</p>`;
  }
}

// --- Display Movies ---
function displayMovies(movies) {
  results.innerHTML = "";
  movies.forEach(({ Title, Year, Poster, imdbID }) => {
    const movie = document.createElement("div");
    movie.className = "movie";

    const img = document.createElement("img");
    img.src = Poster !== "N/A" ? Poster : "https://via.placeholder.com/80x120?text=No+Image";
    const info = document.createElement("div");
    const title = document.createElement("h3");
    const year = document.createElement("p");

    title.textContent = Title;
    year.textContent = `Year: ${Year}`;
    info.append(title, year);
    movie.append(img, info);
    results.appendChild(movie);

    movie.addEventListener("click", () => showDetails(imdbID));
  });
}

// --- Show Movie Details ---
async function showDetails(id) {
  try {
    results.innerHTML = "<p>Loading details...</p>";
    const res = await fetch(`${API_URL}?i=${id}&apikey=${API_KEY}`);
    const data = await res.json();
    results.innerHTML = `
      <div class="movie">
        <img src="${data.Poster}" alt="${data.Title}" />
        <div>
          <h2>${data.Title}</h2>
          <p>🎞️ ${data.Genre}</p>
          <p>⭐ ${data.imdbRating}/10</p>
          <p>${data.Plot}</p>
          <button id="backBtn">⬅ Back</button>
        </div>
      </div>`;
    document.getElementById("backBtn").onclick = () => fetchMovies(input.value);
  } catch {
    results.innerHTML = `<p style="color:red;">Error loading details.</p>`;
  }
}

// --- Event Handling ---
button.addEventListener("click", () => {
  const query = input.value.trim();
  if (query) fetchMovies(query);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") fetchMovies(input.value.trim());
});

