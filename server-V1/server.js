const express = require('express');
const bodyParser = require("body-parser");

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.json({"message":"hello world"})
})

app.post('/sendBookmarks', (req,res) => {
    console.log(req.body)
    res.status(200).json({"message":"Recieved"})
})

app.listen(9999, () => console.log('Server is up and running on port 9999'))