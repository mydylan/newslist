import parse from './helpers/parse';
import ItemsList from './ItemsList';
import ViewListGenerator from './ViewListGenerator';
import Item from './Item';

export default class App {
  constructor(data) {
    this.itemsData = parse(data);
    this.viewList = new ViewListGenerator();
    this.itemsList = new ItemsList(this.itemsData);
    this.item = new Item(this.itemsData);
  }

  render() {
    this.viewList.render(this.itemsList.setItemsPerPage(8));

    // EVENTS
    document.querySelector('.search-input input').addEventListener('keyup', (e) => {
      let searchText = e.currentTarget.value;
      this.viewList.render(this.itemsList.search(searchText));
    });


    document.querySelector('.filter-button').addEventListener('click', () => {
      document.querySelector('.filters-wrapper').classList.toggle('open');
      document.querySelector('.caret').classList.toggle('rotate');
    });

    const getIdOfElement = (target) => {
      while (target.id === "") {
        target = target.parentElement;
      }
      return target.id;
    };

    document.querySelector('.list-wrapper').addEventListener('click', (e) => {
      const id = getIdOfElement(e.target);
      this.item.render(id);
    }, true);
  }
}
