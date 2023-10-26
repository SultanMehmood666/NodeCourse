const ApiUrl = 'http://localhost:5000'
async function httpGetPlanets() {
  const response = await fetch(`${ApiUrl}/planets`)
  return await response.json();
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${ApiUrl}/launches`);
  const fetchLaunches = await response.json();
  
  if (Array.isArray(fetchLaunches) && fetchLaunches.length > 0) {
    return fetchLaunches
      .filter(launch => launch !== null) // Filter out null entries
      .sort((a, b) => {
        console.log("fetchLaunches", fetchLaunches);
        // Check if 'flightNumber' is present in both 'a' and 'b' before sorting
        if (a.flightNumber && b.flightNumber) {
          return a.flightNumber - b.flightNumber;
        } else {
          // Handle cases where 'flightNumber' is missing in some objects
          // You can decide how to handle such cases, e.g., by placing those objects at the end of the list.
          return 0; // Change this based on your sorting criteria
        }
      });
  } else {
    // Handle the case where 'fetchLaunches' is not an array or is empty
    return [];
  }
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${ApiUrl}/launches`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(launch),
    })
  }catch(err){
      return{
        ok: false,
      }
  }
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  try{
      return await fetch(`${ApiUrl}/launches/${id}`,{
        method: 'delete'
      })  
  }catch(err){
    console.log(err)
    return {
      ok: false,
    }
  }
  
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};