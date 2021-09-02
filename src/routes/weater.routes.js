const express = require('express')
const controller = require('../controller')
const routes = express.Router()

routes.get('/',controller.weater.home)
      .get('/location',controller.weater.location)
      .get('/current/:city?',controller.weater.current)
      .get('/forecast/:city?',controller.weater.forecast)

module.exports = routes


