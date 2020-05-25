const users = [];

for (let i = 1; i <= 10; i++) {
  users.push({
    id: i,
    username: `user${i}`,
    displayName: `User ${i}`,
    description: `Description for user ${i}`,
  });
}

export default () => ({
  getList() {
    console.log(`$api.users.getList()`);
    return users;
  },
  getUser(username) {
    console.log(`$api.users.getUser(${username})`);
    return users.find(m => m.username === username);
  },
});
