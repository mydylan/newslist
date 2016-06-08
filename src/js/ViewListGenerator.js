export default class ViewListGenerator {
  constructor(itemsListModel) {
    this.container = document.querySelector('#list-container');
    this.noFoundTemplate = '<div class="empty">No Found</div>';
    this.itemsListModel = itemsListModel;

    this.getItemList = (list) => {
      let template = list.map(item => {
        const date = new Date(item.date);
        const dateText = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        return (`<div id=${item.id} class='item-wrapper'>
                  <div class='item'>
                    <div class='icon'></div>
                    <div class='item-title'>
                      ${item.titleNoFormatting}
                      <div class='item-time'>Posted: ${dateText}</div>
                    </div>
                  </div>
                </div>`);
      });
      return template.join('');
    };

    this.createTemplate = (list) => {
      let template = `
        <div class="pagination-header">
          <div class="page-total">Page ${1} in ${5}</div>
          <div class="page-dropdown">
            <div>5 per page</div>
            <div class="caret"></div>
          </div>
          <div class="page-menu">
            <div>10 per page</div>
            <div>20 per page</div>
          </div>
        </div>
        <div class="list-wrapper">${this.getItemList(list)}</div>
        <div class="pagination-footer">
          <div class="page-prev">
            <div class="caret"></div>
            <p>prev</p>
          </div>
          <p>Page ${1} in ${5}</p>
          <div class="page-next">
            <p>next</p>
            <div class="caret"></div>
          </div>
        </div>
      `;
      return template;
    };

    this.template = () => {
      if (this.list.length) {
        const template = this.createTemplate(this.list[0]);
        this.container.insertAdjacentHTML('beforeend', template);
      } else {
        this.container.insertAdjacentHTML('beforeend', this.noFoundTemplate);
      }
    }

    this.destroy = () => {
      this.container.innerHTML = '';
    }
  }

  render(list) {
    this.list = list;
    this.destroy();
    this.template();
  }
}
