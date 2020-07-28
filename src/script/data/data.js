class Data {
  static searchRecipe(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.meals) {
          return Promise.resolve(json.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default Data;
