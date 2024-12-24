const btnSearch = document.querySelector(".search-app");
const userSearchRequestOnclick = document.querySelector(".btn-submit-search");
// events
btnSearch.addEventListener("click", () => {
  const searchBox = document.querySelector(".search-div");
  searchBox.classList.add("show-searchdiv");
  userSearchRequestOnclick.addEventListener("click", () => {
    const userInput = document.getElementById("user-input");
    let inputVal = userInput.value;
    if (inputVal == "") {
      console.log("Not valid value"); //Debugging statemenst
    } else {
      console.log("That is a valid value"); //Debugging statemenst
    }
  });
});
