//Dependencies
const express = require('express')
const app = express()
const cors = require("cors")

const logsController = require("./controllers/logsController")

//Routes
app.use(express.json())
app.use(cors())
app.use("/logs", logsController)

//exports
module.exports = app