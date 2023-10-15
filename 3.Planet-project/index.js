const {parse} = require('csv-parse');
const fs =  require("fs");
const result = [];



fs.createReadStream('keppler-data.csv')
//    pipe function act as pipe b/w input-parse & parse 
    .pipe(parse({
    comment: '#',
    columns: true,
   }))
//    event
  .on('data',(data)=>{
    result.push(data)
  })
  .on('end',()=>{
    console.log(result)
    console.log('done')
  })
  .on('error',(err)=>{
    console.log(err)
  })
