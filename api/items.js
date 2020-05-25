const items = [];

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 100; j++) {
    items.push({
      id: `${i}-${j}`,
      title: `Item title ${i}-${j}`,
      user: {
        id: i,
        username: `user${i}`,
        displayName: `User ${i}`,
        description: `Description for user ${i}`,
      }
    });
  }
}

function paginate(items, page = 1, pageSize = 24) {
  return items.slice((page - 1) * pageSize, page * pageSize);
}

export default () => ({
  getList(userName, page = 1, pageSize = 24) {
    console.log(`$api.items.getList(${userName}, ${page}, ${pageSize})`);
    const userItems = items.filter(i => i.user.username === userName);
    const pageItems = paginate(userItems, page, pageSize);
    
    const hasNextPage = page * pageSize < items.length;
    return {
      items: pageItems,
      hasNextPage,
    };
  },
  getItem(id) {
    console.log(`$api.items.getItem(${id})`);
    const item = items.find(i => i.id === id);
    return item;
  },
});
