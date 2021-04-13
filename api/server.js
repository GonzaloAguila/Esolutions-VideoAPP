const express = require('express')
const morgan = require('morgan')
const path = require("path");
const app = express()
const api = require('./routes')
require('dotenv').config()
const PORT = process.env.PORT || 4000

const connectDB = require("./config")
connectDB()

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json({ extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use('/api', api)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public", "index.html"));
  });
  
app.listen(PORT, (req,res) =>{
    console.log(`Listening on port ${PORT}`)
})