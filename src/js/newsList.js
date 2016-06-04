export class NewsList {
  constructor(items) {
    this.items = items;
    this.isRelatedNews = true;
  }

  search(string) {
    return this.items.filter(item => {
      return item.searchTitle.search(string.toLowerCase()) !== -1;
    });
  }

  filter(fromDate, toDate) {

  }

  showRelatedNews(state) {
    this.isRelatedNews = state;
  }
};
