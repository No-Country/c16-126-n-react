const express = require('express')
const router = express.Router()


const { getLoginClient, postLoginClient, postRegisterClient } = require('../controllers/controlClients')

router
  .get('/login', getLoginClient)
  .post('/login', postLoginClient)
  .post('/registroclientes', postRegisterClient)

module.exports = router