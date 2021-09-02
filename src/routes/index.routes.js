const express = require('express')
const routes = express.Router()
routes.use('/v1',require('./weater.routes'))
module.exports = routes


