const fs = require('fs');
const {parse} = require('csv-parse');
const path = require('path');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

/**
const promise = new Promise((resolve, reject)=>{
  resolve(42)
});
    we could use promise.then((result)=>)

 * 
 */

const LoadPlanets = async() =>{
return new Promise((resolve, reject)=>{

    fs.createReadStream(path.join(__dirname, '..', 'Data', 'keppler-data.csv'))
// parse
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
      console.log("Data",data)
      habitablePlanets.push(data);
    }
  })
  .on('error', (err) => {
    reject(err)
  })
  .on('end', () => {
    console.log("Data Found")
    resolve();
  });
});
}


function getAllPlanets(){
  return habitablePlanets;
}


  module.exports={
    LoadPlanets, 
    getAllPlanets 
  }