
// Fetch data.json from the public folder
async function fetchData() {
	try {
	  const response = await fetch(process.env.REACT_APP_URLDATA); // Fetch from public folder
	  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	  }
	  const data = await response.json(); // Parse JSON data
	  console.log(data); // Log data to confirm it works
	  return data; // Return data for further use
	} catch (error) {
	  console.error('Failed to fetch data:', error);
	  return [];
	}
  }
  
  export default fetchData;