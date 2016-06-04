import parse from './helpers/parse';
import ItemsList from './ItemsList';
import ViewListGenerator from './ViewListGenerator';

export default class App {
  constructor(data) {
    this.itemsData = parse(data);
    this.viewList = new ViewListGenerator();
    this.itemsList = new ItemsList(this.itemsData);
  }

  render() {
    this.viewList.render(this.itemsList.setItemsPerPage());
  }
}
