// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
        res.send('this is app 2')
    }
)
app.listen(4000, () => console.log('Server is up and running on port 4000'))