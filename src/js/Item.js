export default class Item {
  constructor(items) {
    this.items = items;
    this.container = document.querySelector("#item-container");
    this.template = "";

    this.show = () => {
      this.container.style.display = "flex";
      document.querySelector('html').style.overflow = "hidden";
    };

    this.hide = () => {
      this.container.style.display = "none";
      document.querySelector('html').style.overflow = "scroll";
    };

    this.createTemplate = (id) => {
      const item = this.items.find(item => {
        return item.id === JSON.parse(id);
      });
      const date = new Date(item.date);
      const dateText = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
      return (`
        <div class="item-news">
    			<div class="close"></div>
    			<div class="news">
    				<div class="news-content">
    					<div class="img-wrapper">
    						<img src="${item.image.url}" alt="">
    						<div class="post">
    							<div class="post-date">${dateText}</div>
    							<div class="publisher">${item.publisher}</div>
    						</div>
    					</div>
    					<div class="news-text">
    						<div class="news-title">${item.title}</div>
    						<div class="news-text">
    							${item.content}
    							<a href=${item.unescapedUrl} target="_blank">read more.</a>
    						</div>
    					</div>
    				</div>
    				<div class="related-news">

    				</div>
    			</div>
    		</div>
      `);
    };

    this.template = (id) => {
      if (this.items.length) {
        const template = this.createTemplate(id);
        this.container.insertAdjacentHTML('beforeend', template);
      }
      this.show();
    };

    this.destroy = () => {
      this.hide();
      this.container.innerHTML = '';
    };
  }

  render(id) {
    this.destroy();
    this.template(id);

    window.addEventListener('keyup', (e) => {
      if(e.keyCode === 27) {
        this.destroy();
      }
    })
  }

}
