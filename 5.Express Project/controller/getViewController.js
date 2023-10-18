const Friends = require('../Modal/Friends');
const friends = Friends.friends;

function View(req, resp){
    resp.status(200).json(friends)
}

module.exports={
    View
}