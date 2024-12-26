/**
 *
 * @param {*} url
 * @returns {object} data
 * This is an async function that gets data from resource location based on a specified url path
 */
export default async function getResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
