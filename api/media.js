const media = [];

for (let i = 1; i <= 100; i++) {
  media.push({
    id: i,
    title: `Item title ${i}`,
  });
}

function paginate(items, page = 1, pageSize = 24) {
  return items.slice((page - 1) * pageSize, page * pageSize);
}

export default () => ({
  getList(page = 1, pageSize = 24) {
    console.log(`$api.media.getList(${page}, ${pageSize})`);
    const items = paginate(media, page, pageSize);
    const hasNextPage = page * pageSize < media.length;
    return {
      items,
      hasNextPage,
    };
  },
  getMedia(id) {
    console.log(`$api.media.getMedia(${id})`);
    return media;
  },
});
