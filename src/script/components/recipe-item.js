class RecipeItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  getIngredients(recipe) {
    let i = 1;
    let bahan = [];
    while (recipe[`strIngredient${i}`]) {
      bahan.push(
        "<tr>" +
          "<td>" +
          "<li>" +
          recipe[`strIngredient${i}`] +
          "</li>" +
          "</td>" +
          "<td>" +
          recipe[`strMeasure${i}`] +
          "</td>" +
          "</tr>"
      );
      i++;
    }
    return bahan.join("");
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        .menu-container {
            width: 28em;
            padding: 2% 6% 3% 6%;
            margin: 1rem auto;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .menu-name {
            text-align: center;
            font-size: 2rem;
        }

        .menu-img {
            text-align: center
        }

        img {
            width: 80%;
            border-radius: 10px
        }

        .instruction {
            text-align: justify
        }

        td {
            padding-left: 1rem
        }

        @media screen and (max-width: 768px){
          .menu-container{
            width:23rem;
          }
        }

        @media screen and (max-width: 545px){
          .menu-container{
            width:17rem;
          }
        }
    </style>
    <div class="menu-container">
        <h2 class="menu-name">${this._recipe.strMeal}</h2>
        <div class="menu-img">
            <img src="${this._recipe.strMealThumb}" />
        </div>
        <div class="ingredients-container">
            <h2> Ingredients </h2>
            <table>
                ${this.getIngredients(this._recipe)}
            </table>
        </div>
        <div class="instruction-container">
            <h2> Instructions </h2>
            <div class="instruction">
                ${this._recipe.strInstructions}
                <div>
                </div>
            </div>
        </div>
    </div>`;
  }
}

customElements.define("recipe-item", RecipeItem);
