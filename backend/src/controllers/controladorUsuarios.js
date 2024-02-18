const baseDeDatos = require('../base/conexionDB')
const { createUserWithEmailAndPassword: crearUsuarioEnFirebase } = require('firebase/auth')
const { auth } = require('../firebase')

const registrarUsuarioFB = async (email, password) => {
  try {
    const credencialesDeUsuario = await crearUsuarioEnFirebase(auth, email, password)
    return credencialesDeUsuario
  } catch (error) {
    return Promise.reject(error); // Rechazar la promesa con el error
  }
}

async function postRegistroUsuario(req, res) {
  const { nombre, apellido, email, ciudad, provincia, codigo_postal, password } = req.body

  try {
    const credencialesDeUsuario = await registrarUsuarioFB(email, password)

    const sql = `INSERT INTO Usuarios (nombre, apellido, email, codigo_postal, ciudad, provincia) VALUES (?, ?, ?, ?, ?, ?)`;
    const newClient = [
      nombre,
      apellido,
      email,
      codigo_postal,
      ciudad,
      provincia,
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
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      res.status(400).json({ error: 'El correo ingresado ya existe' });
    } else if (error.code === 'auth/invalid-email') {
      res.status(400).json({ error: 'El correo ingresado es inválido' });
    } else if (error.code === 'auth/weak-password') {
      res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
    } else {
      res.status(400).json({ error: 'Algo no ha salido como esperábamos' });
    }
  }
}

module.exports = {
  postRegistroUsuario
}
