const launches = new Map();
let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: "Explorer IS1",
    launchDate: new Date("27 december, 2030"),
    target: "Kepler-442 b",
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

/*launches.set(launch.flightNumber, launch);: 
This line adds the launch object to the launches Map using the flightNumber as the key. 
In this case, it assigns the flight number 100 to the launch object.*/


launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

function AddNewLaunch(launch){
    latestFlightNumber++;
    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['Sultan', 'NASA'],
        flightNumber: latestFlightNumber,
    });

    launches.set(newLaunch.flightNumber, newLaunch);

    return newLaunch; // Return the newly added launch object
}

function existLaunchId(launchId){
    return launches.has(launchId);
}


function abortLaunById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
module.exports={
    getAllLaunches,
    AddNewLaunch,
    existLaunchId,
    abortLaunById

}