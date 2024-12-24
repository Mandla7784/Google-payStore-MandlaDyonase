const btnSearch = document.querySelector(".search-app");
// events
btnSearch.addEventListener("click", () => {
  const searchBox = document.querySelector(".search-div");
  searchBox.classList.add("show-searchdiv");
});
