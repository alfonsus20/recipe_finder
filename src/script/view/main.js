import "../components/recipe-list.js";
import "../components/search-bar.js";
import Data from "../data/data.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const recipeListElement = document.querySelector("recipe-list");

  const onButtonSearchClicked = () => {
    Data.searchRecipe(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (result) => {
    recipeListElement.recipes = result;
  };

  const fallbackResult = (message) => {
    recipeListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
