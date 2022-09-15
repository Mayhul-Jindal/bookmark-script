const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(cors())

app.get('/', (req, res) => {
    res.json({"message":"hello world"})
})

app.post('/send', (req,res) => {
    console.log(req.body)
    res.status(200).json({"message":"Recieved"})
})
  
app.listen(5000, () => console.log('Server is up and running on port 5000'))