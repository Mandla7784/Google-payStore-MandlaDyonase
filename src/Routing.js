/**
 * TODO:
 * We gonna Get all the pages div and and add a class hide-page
 * get all the links and add events
 */
const routePages = document.querySelectorAll(".page");
routePages.forEach((page) => {
  page.classList.add("hide-page");

  const pageId = page.id;

  const routeLinks = document.querySelectorAll(".link");

  routeLinks.forEach((link) => {
    const path = link.href.split("#")[1];

    link.addEventListener("click", () => {
      if (pageId === path) {
        page.classList.add("show-page");
      } else {
        page.classList.remove("show-page");
      }
    });
  });
});
///
