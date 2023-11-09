const http = require('http');
const {app} = require('./app');
const PORT = process.env.PORT || 5000; 
const {LoadPlanets} = require('./modals/planets.modal');
const server = http.createServer(app);
const mongoose = require('mongoose');


const Mongoose_Url = 'mongodb://localhost:27017/'
mongoose.connection.once('open',()=>{console.log("Connection Successfull!")});
mongoose.connection.on('error',(err)=>{console.log("There is an error", err)});

async function startServer(){
    // Data loading function so we have it as server load
await LoadPlanets();
await mongoose.connect(Mongoose_Url); 


server.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}...`);
})
}

startServer();