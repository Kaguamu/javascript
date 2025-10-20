class UserFetcher {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getUsers(limit = 5) {
    try {
      const res = await fetch(`${this.apiUrl}?_limit=${limit}`);
      if (!res.ok) throw new Error("Failed to fetch users");
      const users = await res.json();
      this.displayUsers(users);
    } catch (err) {
      console.error(err.message);
    }
  }

  displayUsers(users) {
    users.forEach(({ id, name, email }) => {
      console.log(`#${id} ${name} (${email})`);
    });
  }
}

const api = new UserFetcher("https://jsonplaceholder.typicode.com/users");
api.getUsers(3);
