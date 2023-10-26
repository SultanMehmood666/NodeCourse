function getMessages(req, resp){
        resp.render('messages',{
            title: "Messages",
            friend: "Bilal"
        })
}

module.exports={
    getMessages
}