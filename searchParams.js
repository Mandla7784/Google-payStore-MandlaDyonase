const btnSearch = document.querySelector(".search-app");
const userSearchRequestOnclick = document.querySelector(".btn-submit-search");
// events
btnSearch.addEventListener("click", () => {
  const searchBox = document.querySelector(".search-div");
  searchBox.classList.add("show-searchdiv");
  userSearchRequestOnclick.addEventListener("click", () => {
    alert("Search submited");
  });
});
