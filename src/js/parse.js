export function parse(data) {
  let i = 0;
  return data.results.map(item => {
    return {
      ...item,
      id: i++,
      publishedDate: new Date(item.publishedDate).getTime(),
      searchTitle: item.titleNoFormatting.toLowerCase()
    }
  });
};
