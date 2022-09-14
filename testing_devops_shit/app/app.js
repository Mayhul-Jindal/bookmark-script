// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
        res.send('This is app 1')
    }
)
  
app.listen(5000, () => console.log('Server is up and running on port 5000'))