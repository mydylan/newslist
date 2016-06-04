import { DATA } from './js/helpers/data';
import App from './js/App';
import Style from './stylesheets/app.sass';


const app = new App(DATA);
app.render();

document.querySelector('.filter-button').addEventListener("click", () => {
  document.querySelector('.filters').classList.toggle('open');
  document.querySelector('.caret').classList.toggle('rotate');
});
