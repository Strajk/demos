/**
 * @returns {Number}
 */
async function getUsersCount() {
  const response = await callApi('/users');
  return response.count;
}

async function main() {
  // Throws Unexpected `await` of a non-Promise (non-"Thenable") value.(@typescript-eslint/await-thenable)
  const count = await getUsersCount()
  console.log(count)
}