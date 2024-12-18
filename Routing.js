/**
 * TODO:
 * We gonna Get all the pages div and and add a class hide-page
 * get all the links and add events
 */
const routePages = document.querySelectorAll(".page");

// hide each page
routePages.forEach((page) => {
  const pageId = page.id;

  // get the links
  const routeLinks = document.querySelectorAll(".link");
  console.log(routeLinks);
});
