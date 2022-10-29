const express = require('express');
var cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

// cors
app.use(cors())

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sasta databse
let data = {};

app.get('/', (req, res) => {
    res.json({"message":"hello world"})
})

app.get('/getBookmarks', (req,res)=>{
    res.status(200).send(data)
})

app.post('/sendBookmarks', (req,res) => {
    data = req.body
    console.log(data)
    res.status(200).json({"message":"Recieved"})
})

app.listen(9999, () => console.log('Server is up and running on port 9999'))