import "./recipe-item.js";

class RecipeList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.show = true;
  }

  connectedCallback() {
    this.render();
  }

  set recipes(recipes) {
    this._recipes = recipes;
    this.show = false;
    this.render();
  }

  render() {
    if (this.show) {
      this.shadowDOM.innerHTML = `
      <style>
        .show {
            width: 100%;
            height: 50vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
      </style>
      <div class="show">
          Your search results will be shown here
      </div>
      `;
    } else {
      this.shadowDOM.innerHTML = ``;
      this._recipes.forEach((recipe) => {
        const recipeItemElement = document.createElement("recipe-item");
        recipeItemElement.recipe = recipe;
        this.shadowDOM.appendChild(recipeItemElement);
      });
    }
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `<style>h2{text-align:center}</style><h2>${message}</h2>`;
  }
}

customElements.define("recipe-list", RecipeList);
