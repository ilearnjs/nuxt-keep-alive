const items = [];

for (let i = 1; i <= 100; i++) {
  items.push({
    id: i,
    title: `Item title ${i}`,
  });
}

function paginate(items, page = 1, pageSize = 24) {
  return items.slice((page - 1) * pageSize, page * pageSize);
}

export default () => ({
  getList(page = 1, pageSize = 24) {
    console.log(`$api.items.getList(${page}, ${pageSize})`);
    const pageItems = paginate(items, page, pageSize);
    const hasNextPage = page * pageSize < items.length;
    return {
      items: pageItems,
      hasNextPage,
    };
  },
  getItem(id) {
    console.log(`$api.items.getItem(${id})`);
    const item = items.find(i => i.id === +id);
    return item;
  },
});
