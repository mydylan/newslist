export default class ViewListGenerator {
  constructor() {
    this.container = document.getElementById('list-wrapper');
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
  }

  render(list) {
    const template = this.createTemplate(list[0]);
    this.container.insertAdjacentHTML('beforeend', template);
  }
}
