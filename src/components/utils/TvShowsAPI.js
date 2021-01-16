import { BASE_API_URL } from "../../config.js";

async function showLookup(id) {
  return await fetch(`${BASE_API_URL}/shows/${id}`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => console.log("error", error));
}
async function showSearch(input) {
  return await fetch(`${BASE_API_URL}/search/shows?q=${input}`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => console.log("error", error));
}

export { showLookup, showSearch };
