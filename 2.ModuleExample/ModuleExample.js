const {get} = require("https");

get('https://www.google.com',(res)=>{
	res.on("data",(chunk)=>{
		console.log(`data:${chunk}`);
	})
	res.on("end",()=>{
		console.log(`There is no data`);
	})
})