//import/require express so we can use it to create our application
const express = require("express");

const mongoose = require("mongoose");

//run express to create an express app and store it in the variable named app
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/AUTODB', {useNewUrlParser: true, useUnifiedTopology: true});


//let express know that it is going to get JSON sent to it at some point in a request
app.use(express.json());

//creating a variable represents the port we want our app to listen on
const port = 5000;

// add a default route
app.get('/', function (req, res) {
res.send('You have reached the top-level route with a GET');
})

const autoRouter = require("./routes/autoRouter")
app.use('/api/autos', autoRouter);

//basically fire up the express app.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})