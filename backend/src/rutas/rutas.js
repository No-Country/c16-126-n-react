const express = require('express')
const router = express.Router()


const { postRegistroUsuario } = require('../controllers/controladorUsuarios')
const { postInicioCliente, postInicioProfesional } = require('../controllers/controladorInicio')
const { cerrarSesionCliente } = require('../controllers/cerrarSesion')
router
  .post('/inicioCliente', postInicioCliente)
  .post('/inicioProfesional', postInicioProfesional)
  .post('/registroclientes', postRegistroUsuario)
  .get('/cerrarSesion', cerrarSesionCliente)

module.exports = router