/**
 * TODO:
 * we gonna renddr top charts data uisng innerHTML
 */

import {
  getResource,
  createCardTemplateAndDisplayData,
} from "./utils/herlper.js";

const topChartDivContainer = document.querySelector(".top-charts");
const top_charts_url_base_path = "./data/topCharts.json";
const appsContainer = document.querySelector(".app-container");
const booksContainer = document.querySelector(".books-container");
const moviesContainer = document.querySelector(".movies-container");
const books_base_path = "./data/books.json";
const apps_base_path = "./data/appjs.json";
const urlPath_movies = "./data/movies.json";
/**
 *
 * @param {*} path
 * This is a function to get top charts using fetch operation
 */

async function getTopChart(path) {
  const data = await getResource(path);
  displayCharts(data);
}

function displayCharts(charts_list) {
  charts_list.forEach((chart) => {
    const {
      app_name,
      developer,
      category,
      rank,
      rating,
      downloads,
      price,
      icon_url,
    } = chart;

    topChartDivContainer.innerHTML += /*html*/ `
     
    <div class="chart-card">
    <img src="${icon_url}" alt="${app_name} Icon" class="card-icon" />
    <div class="card-content">
        <h3 class="app-name">${app_name}</h3>
        <h4 class="category">${category}</h4>
        <h5 class="developer">${developer}</h5>
        <p class="downloads">Downloads: ${downloads}</p>
        <p class="price">${price}</p>
        <p class="rank">Rank: ${rank}</p>
    </div>
</div>
     `;
  });
}

async function displayBooks(url) {
  const data = await getResource(url);
  const books = data["books"];
  books.forEach((book) => {
    createCardTemplateAndDisplayData(booksContainer, book);
  });
}
async function displayApps(url) {
  const data = await getResource(url);
  const apps = data["apps"];

  apps.forEach((app) => {
    createCardTemplateAndDisplayData(appsContainer, app);
  });
}

async function displayMovies(path) {
  const data = await getResource(path);
  const movie_list = data;
  movie_list.forEach((movie) => {
    createCardTemplateAndDisplayData(moviesContainer, movie);
  });
}

//

function main() {
  getTopChart(top_charts_url_base_path);
  displayApps(apps_base_path);
  displayBooks(books_base_path);
  displayMovies(urlPath_movies);
}

main();
