const express = require('express')
const router = express.Router()


const { postRegistroUsuario } = require('../controllers/controladorUsuarios')
const { postInicioCliente, postInicioProfesional } = require('../controllers/controladorInicio')

router
  .post('/inicioCliente', postInicioCliente)
  .post('/inicioProfesional', postInicioProfesional)
  .post('/registroclientes', postRegistroUsuario)

module.exports = router