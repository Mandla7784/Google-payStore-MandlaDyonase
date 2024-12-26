/**
 *
 * @param {*} url
 * @returns {object} data
 * This is an async function that gets data from resource location based on a specified url path
 */
export async function getResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function createCardTemplateAndDisplayData(container, item) {
  // Creates the DOM Elemsts
  const { icon_url, app_name, downloads, price } = item;
  const card = document.createElement("div");
  const image = document.createElement("img");
  const appDownloads = document.createElement("p");
  const name = document.createElement("h2");
  const downloadButton = document.createElement("button");

  card.classList.add("card");
  image.src = `${icon_url}`;
  image.alt = app_name;
  name.textContent = app_name;

  // Set up the download button
  downloadButton.textContent = "Download";
  downloadButton.classList.add("download-button");
  downloadButton.onclick = () => {
    alert(`Downloading ${app_name}...`);
  };

  appDownloads.textContent = `${downloads}`;
  // Appending elements to the card
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(appDownloads);
  card.appendChild(downloadButton);

  // Appending the card to the container
  container.appendChild(card);
}
