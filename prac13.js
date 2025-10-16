

class User {
  constructor(id, name, age, active) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.active = active;
  }

  get info() {
    return `${this.name}, ${this.age} years old (${this.active ? "Active" : "Inactive"})`;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  async fetchUsers() {
    try {
      // Simulate API call
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            new User(1, "Alice", 23, true),
            new User(2, "Brian", 31, false),
            new User(3, "Cynthia", 27, true),
            new User(4, "Duncan", 22, true),
            new User(5, "Eva", 29, false),
          ]);
        }, 1000);
      });
      this.users = data;
      console.log("✅ Users fetched successfully");
    } catch (error) {
      console.error("❌ Failed to fetch users:", error);
    }
  }

  getActiveUsers() {
    return this.users.filter((u) => u.active);
  }

  displayUsers(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return console.error("⚠️ Container not found!");

    container.innerHTML = "";
    this.getActiveUsers().forEach((user) => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.textContent = user.info;
      container.appendChild(div);
    });
  }
}

(async () => {
  const manager = new UserManager();
  await manager.fetchUsers();
  manager.displayUsers("userList");
})();
