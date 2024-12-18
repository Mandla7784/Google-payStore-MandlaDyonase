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
  } catch (error) {}
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

    topChartDivContainer.innerHTML = /*html*/ `
     
        <div class="chart-card">
            <img src="${icon_url}" />
            <div class="card-content">
                <h3>${app_name}</h3>
                <h4>${category}</h4>
                <h5>${developer}</h5>
                <p>downloads:${downloads}</p>
                <p>${price}</p>
                <p>${rank}</p>
            
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
