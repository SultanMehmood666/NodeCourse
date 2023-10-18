const path = require('path');

function getFile(req, resp){
    resp.sendFile(path.join(__dirname, "..", 'public', "images" ,"Logo.jpg"));
}
module.exports={
    getFile
}