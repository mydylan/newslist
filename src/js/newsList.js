export class NewsList {
  constructor(items) {
    this.items = items;
    this.itemsPerPage = 5;

    this.buildList = (items, itemsPerPage) => {
      let list = [];
      let pages = Math.ceil(items.length/itemsPerPage);
      let counter = 0;

      for (let i=0; i<pages; i+=1) {
        list[i] = [];
        for (let j=0; j<itemsPerPage; j+=1) {
          if (items[counter] !== undefined) {
            list[i][j] = items[counter];
            counter += 1;
          }
        }
      }
      return list;
    };
  }

  search(string) {
    let items = this.items.filter(item => {
      return item.searchTitle.search(string.toLowerCase()) !== -1;
    });
    return this.buildList(items, this.itemsPerPage);
  }

  filter(fromDate, toDate) {
    let items =  this.items.filter(item => {
      return item.date >= fromDate && item.date <= toDate;
    });
    return this.buildList(items, this.itemsPerPage);
  }

  showRelatedNews(state) {
    if (state === false) {
      let items = this.items.map(item => {
        return {
          ...item,
          relatedStories: ''
        }
      });
      return this.buildList(items, this.itemsPerPage);
    } else {
      return this.buildList(this.items, this.itemsPerPage);
    }
  }

  setItemsPerPage(itemsPerPage = this.itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    return this.buildList(this.items, itemsPerPage);
  }

  getItemsPerPage() {
    return this.itemsPerPage;
  }
};
