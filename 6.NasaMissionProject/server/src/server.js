const http = require('http');
const {app} = require('./app');
const PORT = process.env.PORT || 5000; 
const {LoadPlanets} = require('./modals/planets.modal');
const server = http.createServer(app);


async function startServer(){
    // Data loading function so we have it as server load
await LoadPlanets();

server.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}...`);
})
}

startServer();