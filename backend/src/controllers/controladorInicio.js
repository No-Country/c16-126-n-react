const baseDeDatos = require('../base/conexionDB')


function postInicioCliente(req, res) {
  res.status(201).json({ mensaje: 'Cliente logeado correctamente' });
}
function postInicioProfesional(req, res) {
  res.status(201).json({ mensaje: 'Profesional logeado correctamente' });
}


module.exports = {
  postInicioCliente,
  postInicioProfesional
}