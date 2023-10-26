const {getAllPlanets} = require('../../modals/planets.modal');

function httpGetPlanets(req, resp){
    return resp.status(200).json(getAllPlanets());
}

module.exports={
    httpGetPlanets
} 