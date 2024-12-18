/**
 * TODO:
 * we gonna renddr top charts data uisng innerHTML
 */
const topChartDivContainer = document.querySelector(".top-charts");
const url_base_path = "./data/topCharts.json";
/**
 *
 * @param {*} path
 * This is a functio to get top charts using fetch operation
 */
async function getTopChart(path) {
  try {
    const response = await fetch(path);
    const data = await response.json();
    console.log(data);
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
    console.log(app_name, developer);
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

//

function main() {
  getTopChart(url_base_path);
}

main();
