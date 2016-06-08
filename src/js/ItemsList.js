export default class ItemsList {
  constructor(items) {
    this.items = items;
    this.itemsPerPage = 8;

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

  setItemsPerPage(itemsPerPage = this.itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    return this.buildList(this.items, itemsPerPage);
  }

  getItemsPerPage() {
    return this.itemsPerPage;
  }

  getTotalPages() {
    return Math.ceil(this.items.length/this.itemsPerPage);
  }
};
