require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// database 

// mongoose.connect("mongodb://localhost:27017/authDB", { useNewUrlParser: true }, () => {
//     console.log("Connected to Database");
// });
mongoose.connect("mongodb://localhost:27017/authDB", { useNewUrlParser: true }, () => {
    console.log("Connected to Database");
})


// middlewares

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log("Server is running on port: " + port);
})