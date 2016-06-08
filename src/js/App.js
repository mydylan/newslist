import parse from './helpers/parse';
import events from './helpers/events'
import ItemsList from './ItemsList';
import ViewListGenerator from './ViewListGenerator';
import ViewItemGenerator from './ViewItemGenerator';

export default class App {
  constructor(data) {
    this.itemsData = parse(data);
    this.itemsList = new ItemsList(this.itemsData);
    this.viewList = new ViewListGenerator(this.itemsList);
    this.viewItem = new ViewItemGenerator(this.itemsData);
  }

  render() {
    this.viewList.render(this.itemsList.setItemsPerPage(8));
    const app = this;
    events(app);
  }
}
