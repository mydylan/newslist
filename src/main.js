import { DATA } from './js/data';
import { NewsList } from './js/newsList';
import { parse } from './js/parse';

const items = parse(DATA);

const newsList = new NewsList(items);
