const query = (elem) => {
  return document.querySelector(elem);
};

const getIdOfElement = (target) => {
  while (target.id === "") {
    target = target.parentElement;
  }
  return target.id;
};

const keyHandler = (e, app) => {
  let searchText = e.currentTarget.value;
  app.viewList.render(app.itemsList.search(searchText));
};

const toggleOpen = () => {
  query('.filters-wrapper').classList.toggle('open');
  query('.caret').classList.toggle('rotate');
};

const openItem = (e, app) => {
  const id = getIdOfElement(e.target);
  app.item.render(id);
}

export default function events(app) {
  query('.search-input input').addEventListener('keyup', (e) => {
    keyHandler(e, app);
  });

  query('.filter-button').addEventListener('click', toggleOpen);

  query('.list-wrapper').addEventListener('click', (e) => {
    openItem(e, app);
  }, true);

  window.addEventListener('keyup', (e) => {
    if(e.keyCode === 27) {
      app.item.destroy();
    }
  });

  query('.close').addEventListener('click', () => {
    app.item.destroy();
  });
}
