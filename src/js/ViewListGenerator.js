export default class ViewListGenerator {
  constructor() {
    this.container = document.querySelector('.list-wrapper');
    this.noFoundTemplate = '<div class="empty">No Found</div>';

    this.createTemplate = (list) => {
      let template = list.map(item => {
        const date = new Date(item.date)
        const dateText = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
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
    this.template()
  }
}
