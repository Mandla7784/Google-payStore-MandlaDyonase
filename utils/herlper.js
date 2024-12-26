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

/**
 *
 * @param {*} container
 * @param {*} item
 * This is a function that creates a card template to render the parsed data
 */
export function createCardTemplateAndDisplayData(container, item) {
  // Creates the DOM Elemsts
  const { icon_url, app_name, downloads, price } = item;
  const cardTemplate = {
    card: document.createElement("div"),
    image: document.createElement("img"),
    appDownloads: document.createElement("p"),
    name: document.createElement("h2"),
    downloadButton: document.createElement("button"),
  };

  const { card, image, appDownloads, name, downloadButton } = cardTemplate;

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

  appDownloads.textContent = `Downloads: ${downloads}`;
  // Appending elements to the card
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(appDownloads);
  card.appendChild(downloadButton);

  // Appending the card to the container
  container.appendChild(card);
}
