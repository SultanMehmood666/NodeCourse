const express = require('express');
const planetsRouter = express.Router();
const {httpGetPlanets} = require('./PlanetsController')

// httpGetPlanets
planetsRouter.get("/", httpGetPlanets)


module.exports={
    planetsRouter
};
