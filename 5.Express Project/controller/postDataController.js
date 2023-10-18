const friend = require('../Modal/Friends');
const friends = friend.friends;


function postData(req, resp){
    if(!req.body.name){
       return resp.status(400).json("Enter Any name first")
    }
    const newFriend = {id: friends.length, name: req.body.name}
    friends.push(newFriend);
    resp.status(201).json(friends);
}

module.exports = {
    postData
}