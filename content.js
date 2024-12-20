/**
 * TODO:
 * we gonna renddr top charts data uisng innerHTML
 */
const topChartDivContainer = document.querySelector(".top-charts");
const top_charts_url_base_path = "./data/topCharts.json";
const appsContainer = document.querySelector(".app-container");
const booksContainer = document.querySelector(".books-container");
const books_base_path = "./data/books.json";
const apps_base_path = "./data/appjs.json";
/**
 *
 * @param {*} path
 * This is a function to get top charts using fetch operation
 */
async function getTopChart(path) {
  try {
    const response = await fetch(path);
    const data = await response.json();

    displayCharts(data);
  } catch (error) {
    console.log("Error fetching..", error);
  }
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

function displayBooks(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const books = data["books"];
      books.forEach((book) => {
        const { icon_url, app_name, downloads, price } = book;

        const card = document.createElement("div");
        const image = document.createElement("img");
        const appDownloads = document.createElement("p");
        const name = document.createElement("h2");
        const downloadButton = document.createElement("button");

        card.classList.add("card");
        image.src = `${icon_url}`;
        image.alt = app_name;
        name.textContent = app_name;
        appDownloads.textContent = `Downloads: ${downloads}`;

        // Set up the download button
        downloadButton.textContent = "Download";
        downloadButton.classList.add("download-button");
        downloadButton.onclick = () => {
          alert(`Downloading ${app_name}...`);
        };

        // Appending elements to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(appDownloads);
        card.appendChild(downloadButton);

        // Appending the card to the container
        booksContainer.appendChild(card);
      });
    });
}
function displayApps(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const apps = data["apps"];

      apps.forEach((app) => {
        const { icon_url, app_name, downloads } = app;

        const card = document.createElement("div");
        const image = document.createElement("img");
        const appDownloads = document.createElement("p");
        const name = document.createElement("h2");
        const downloadButton = document.createElement("button");

        card.classList.add("card");
        image.src = `${icon_url}`;
        image.alt = app_name;
        name.textContent = app_name;
        appDownloads.textContent = `Downloads: ${downloads}`;

        // Set up the download button
        downloadButton.textContent = "Download";
        downloadButton.classList.add("download-button");
        downloadButton.onclick = () => {
          alert(`Downloading ${app_name}...`);
        };

        // Appending elements to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(appDownloads);
        card.appendChild(downloadButton);

        // Appending the card to the container
        appsContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching apps:", error));
}

//

function main() {
  getTopChart(top_charts_url_base_path);
  displayApps(apps_base_path);
  displayBooks(books_base_path);
}

main();
