const { getAllLaunches, AddNewLaunch, existLaunchId, abortLaunById} = require('../../modals/launchesModal');

function httpLaunchesController(req, resp){
    return resp.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, resp){
    const launch = req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return resp.status(400).json({error:"Missing Required Field"})
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return resp.status(400).json({error: "Invalid Launch Date"})
    }
    AddNewLaunch(launch);
    return resp.status(201).json(launch)
  }

function httpAbortLaunch(req, resp){
    const launcId = Number(req.params.id);

    if(!existLaunchId(launcId)){
      return resp.status(404).json({error: 'Launch not found'})
    }
    const aborted = abortLaunById(launcId);
    return resp.status(200).json(aborted)

}

module.exports={
    httpLaunchesController,
    httpAddNewLaunch,
    httpAbortLaunch
}