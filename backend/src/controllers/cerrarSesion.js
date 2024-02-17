const { signOut } = require('firebase/auth')
const { auth } = require('../firebase')
const cerrarSesionCliente = async () => {
  try {
    console.log('Sesion Finalizada');
    const cerrarSesion = await signOut(auth)
    return
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  cerrarSesionCliente
}