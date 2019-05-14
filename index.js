const express = require('express');
const path = require('path');
//Init app
const app = express();

//Defining Port
const port = 8080

//Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//separate route file
const flight = require('./routes/flight');
app.use('/flights',flight)