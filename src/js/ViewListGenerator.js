export default class ViewListGenerator {
  constructor() {
    this.container = document.getElementById('list-wrapper');
    this.noFoundTemplate = '<div class="empty">No Found</div>';

    this.createTemplate = (list) => {
      let template = list.map(item => {
        return (`<div id=${item.id} class='item-wrapper'>
                  <div class='item'>
                    <div class='icon'>YO</div>
                    <div class='item-title'>${item.titleNoFormatting}</div>
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
