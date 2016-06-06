const query = (elem) => {
  return document.querySelector(elem);
};

const getIdOfElement = (target) => {
  while (target.id === "") {
    target = target.parentElement;
  }
  return target.id;
};

const keyHandler = (e, context) => {
  let searchText = e.currentTarget.value;
  context.viewList.render(context.itemsList.search(searchText));
};

const toggleOpen = () => {
  query('.filters-wrapper').classList.toggle('open');
  query('.caret').classList.toggle('rotate');
};

const openItem = (e, context) => {
  const id = getIdOfElement(e.target);
  context.item.render(id);
}

export default function events(context) {
  query('.search-input input').addEventListener('keyup', (e) => {
    keyHandler(e, context);
  });

  query('.filter-button').addEventListener('click', toggleOpen);

  query('.list-wrapper').addEventListener('click', (e) => {
    openItem(e, context);
  }, true);
}
