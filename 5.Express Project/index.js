const express = require('express')
const app = express();
const path = require('path');

// Controllers
const getMehmood = require('./controller/getMehmoodController');
const ViewController = require('./controller/getViewController');
const postDataController = require('./controller/postDataController'); 
const getFile = require('./controller/getFileController');
const getMessages = require('./controller/getMessagesController');

const Port = 3001
const MehmoodRouter = express.Router();




// Middlewares 
app.use(express.json());
// Mounting Router
app.use('/Mehmood',MehmoodRouter);
// This above example is best for when you have group of route starting with /Mehmood
// We could make this more nested by adding more routes like /Mehmood/SUltan
// Whereever we applying this route its mean it start with /Mehmood



app.get("/", ViewController.View);

app.post('/post', postDataController.postData);

app.get('/SendFile', getFile.getFile);

app.get('/Messages', getMessages.getMessages);

// To ue Hbs handle bat
app.set('view engine', 'hbs');
// also set location of Views i.e hbs files
app.set('Views', path.join(__dirname,'Views'));

app.get("/site",(req, resp)=>{
    resp.render('index',{
        title: 'Landing Page',
        Heading: 'Real Estate'
    })
})


// This is used to render pages
app.use("/site", express.static(path.join(__dirname,'public')))

// Applying router
MehmoodRouter.get('/', getMehmood.getSultan)

app.listen(Port,()=>{
    console.log("express is running")
});