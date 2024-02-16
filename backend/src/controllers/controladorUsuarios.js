const baseDeDatos = require('../base/conexionDB')



function postRegistroUsuario(req, res) {
  console.log(req.body);
  const { nombre, apellido, email, ciudad, provincia, codigo_postal, password } = req.body
  const sql = `INSERT INTO Usuarios (nombre, apellido, email, codigo_postal, ciudad, provincia, password) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const newClient = [
    nombre,
    apellido,
    email,
    codigo_postal,
    ciudad,
    provincia,
    password
  ];
  baseDeDatos.run(sql, newClient, (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ error: 'Error al registrar el usuario' });
    } else {
      console.log('Usuario creado correctamente')
      res.status(201).json({ mensaje: 'Usuario creado correctamente' });
    }
  });
}

module.exports = {
  postRegistroUsuario
}