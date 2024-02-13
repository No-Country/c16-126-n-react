const dataBase = require('../databese/connectionDB')

function getLoginClient(req, res) {
  res.send('Hola desde el get login')
}

function postLoginClient(req, res) {
  res.status(201).json({ mensaje: 'Usuario logeado correctamente' });
}

function postRegisterClient(req, res) {
  const { nombre, apellido, email, ciudad, provincia, codigoPostal, direccion, password } = req.body
  const sql = `INSERT INTO Clientes (nombre, apellido, email, ciudad, provincia, codigoPostal, direccion, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const newClient = [
    nombre,
    apellido,
    email,
    ciudad,
    provincia,
    codigoPostal,
    direccion,
    password
  ];
  dataBase.run(sql, newClient, (err) => {
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
  getLoginClient,
  postLoginClient,
  postRegisterClient
}