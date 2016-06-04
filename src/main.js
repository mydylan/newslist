import { DATA } from './js/data';
import parse from './js/parse';
import NewsList from './js/NewsList';
import ViewListGenerator from './js/ViewListGenerator';

const items = parse(DATA);

const newsList = new NewsList(items);

const viewList = new ViewListGenerator();

viewList.render(newsList.setItemsPerPage());
