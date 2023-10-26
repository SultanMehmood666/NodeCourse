const express = require('express');
const LaunchesRouter = express.Router();
const {httpLaunchesController, httpAddNewLaunch, httpAbortLaunch} = require('./LaunchesController');

LaunchesRouter.get('/', httpLaunchesController);
LaunchesRouter.post('/', httpAddNewLaunch);
LaunchesRouter.delete('/:id', httpAbortLaunch);

module.exports={
    LaunchesRouter    
}

