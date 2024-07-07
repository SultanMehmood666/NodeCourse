const express = require('express');
const app = express();
const {planetsRouter} = require('./routes/planets/PlanetsRouter');
const {LaunchesRouter} = require('./routes/launches/LaunchesRouter');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const EventEmitter = require('events');


// Parsing Data
app.use(express.json());

// EventEmitter.defaultMaxListeners = 10; // Set a higher limit, adjust as needed

// cors security 
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

// Mongoose URL

app.use(express.static(path.join(__dirname, "..", 'public')));


app.use("/planets", planetsRouter);
app.use("/launches", LaunchesRouter);


app.get('/*', (req, resp)=>{
    resp.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
// Your code here

module.exports={app};
