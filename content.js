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

// //    "rank": 1,
//     "app_name": "WhatsApp Messenger",
//     "developer": "Meta Platforms, Inc.",
//     "category": "Communication",
//     "rating": 4.3,
//     "downloads": "5B+",
//     "price": "Free",
//     "icon_url

function displayCharts(charts_list) {
  charts_list.forEach((chart) => {
    const {} = chart;
  });
}

//

function main() {
  getTopChart(url_base_path);
}

main();
