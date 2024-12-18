/**
 * TODO:
 * we gonna renddr top charts data uisng innerHTML
 */
const topChartDivContainer = document.querySelector(".top-charts");
const url_base_path = "./data/topCharts.json";
async function getTopChart(path) {
  try {
    const response = await fetch(path);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

//

function main() {
  getTopChart(url_base_path);
}

main();
