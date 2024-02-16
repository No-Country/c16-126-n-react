const baseDeDatos = require('../base/conexionDB')


const postInicioCliente = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM Usuarios WHERE email = ? AND password = ?`;
  baseDeDatos.get(sql, [email, password], (err, row) => {
    if (err) {
      console.error('Error al buscar el cliente:', err.message);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (!row) {
      return res.status(401).json({ error: 'Credenciales inválidas' }); // Cambiar el código de estado a 401 para indicar credenciales inválidas
    }
    // Remover la propiedad "password" del objeto de respuesta
    delete row.password;
    res.status(200).json({ cliente: row }); // Establecer el código de estado como 200 y enviar el cliente como respuesta
  });
};


function postInicioProfesional(req, res) {
  const { email, password } = req.body;
  const sql = `SELECT * FROM Usuarios WHERE email = ? AND password = ?`;
  baseDeDatos.get(sql, [email, password], (err, row) => {
    if (err) {
      console.error('Error al buscar el profesional:', err.message);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (!row) {
      return res.status(401).json({ error: 'Credenciales inválidas' }); // Cambiar el código de estado a 401 para indicar credenciales inválidas
    }
    // Remover la propiedad "password" del objeto de respuesta
    delete row.password;
    res.status(200).json({ profesional: row }); // Establecer el código de estado como 200 y enviar el profesional como respuesta
  });
}


module.exports = {
  postInicioCliente,
  postInicioProfesional
}