import parse from './helpers/parse';
import events from './helpers/events'
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
    const context = this;
    events(context);
  }
}
