const http = require("http");

const server = http.createServer((req, resp)=>{
     resp.writeHead(200,{
        'Content-Type': 'application/json',
     });
     resp.end(JSON.stringify({
        ID: 1,
        NAME: 'SIR ISSAC NEWTON'
     }))
}).listen(3000);