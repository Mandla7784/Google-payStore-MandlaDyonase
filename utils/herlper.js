export default function getResource(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(`Error fetching resources... ${err.message}`));
}
