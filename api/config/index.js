const mongoose = require("mongoose")
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0prueba.cz9qc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const connectDB = async ()=> {
  await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true })
  console.log("Conectado a la DB de Mongo Atlas")
}

module.exports = connectDB
