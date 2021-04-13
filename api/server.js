const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const api = require('./routes')
require('dotenv').config()
const PORT = process.env.PORT || 4000

const connectDB = require("./config")
connectDB()
app.use(cors())
app.use(express.json({ extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use('/api', api)

app.listen(PORT, (req,res) =>{
    console.log(`Listening on port ${PORT}`)
})