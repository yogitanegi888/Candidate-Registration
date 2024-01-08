

const express = require('express');
const port = 7000
const route = require('./Router/router');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors= require("cors")
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());



app.use('/apis', route);

var url = `mongodb://localhost:27017/userDetails`
mongoose.connect(url, () => {
    console.log("Database is successfully connected")
})
app.get('', (req, res) => {

    debugger;
});
app.listen(7000, () => {
    console.log(`app is run successfully ${port}`);
})

module.exports = app;
