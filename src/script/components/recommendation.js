import "./recipe-list.js";
import Data from "../data/data.js";
import "./search-bar.js";

class Recommendation extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.makanan = "";
  }

  connectedCallback() {
    this.render();
  }

  fetchMenuRecommendation() {
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((json) => {
        if (json.meals) {
          return Promise.resolve(json.meals);
        } else {
          return Promise.reject("none");
        }
      });
  }

  hai() {
    console.log("object");
  }

  getMenuRecommendation() {
    return this.fetchMenuRecommendation()
      .then((res) => {
        return `
        <style>
            img {
                width: 100%;
                border-radius: 10px;
            }

            .menu-card {
                margin: auto;
            }

            .card {
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                padding: 12px 18px;
                transition: 0.4s transform
            }

            .card:hover {
                transform: scale(1.02)
            }

            h5 {
                font-size: 1.1rem;
                margin: 8px 0;
                font-family: "Montserrat"
            }

            button {
                background-color: #feb201;
                border: none;
                border-radius: 3px;
                font-size: 0.8rem;
                padding: 5px 15px;
                color: white;
                font-family: Roboto;
                margin-bottom: 12px
            }

            @media screen and (max-width:1344px){
              .card{
                  margin: 1.2rem auto;
              }
            }
          </style>
          <div class="col-lg-3 col-md-6 col-sm-6 menu-card">
              <div class="card" style="width: 15rem;">
                  <img src="${res[0].strMealThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${res[0].strMeal}</h5>
                      <a href="#search-menu" class="detail"><button>More Info</button></a>
                  </div>
              </div>
          </div>
        `;
      })
      .catch((err) => console.log(err));
  }

  render() {
    this.shadowDOM.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      this.getMenuRecommendation().then(
        (res) => (this.shadowDOM.innerHTML += res)
      );
    }
  }
}

customElements.define("recommendation-menu", Recommendation);
