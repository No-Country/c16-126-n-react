const { reauthenticateWithPhoneNumber } = require('firebase/auth')
const DBTurso = require('../base/tablas/tablas')

const verificarRegistro = async (email) => {
  const registro = await DBTurso.execute({
    sql: 'SELECT * FROM profesionales WHERE usuario_id = ( SELECT usuario_id FROM usuarios WHERE email = :email);',
    args: { ':email': email }
  })
  return registro
}

const obtenerOficiosDelProfesional = async (profesionalId) => {
  const oficios = await DBTurso.execute({
    sql: 'SELECT * FROM profesional_profesiones WHERE profesional_id = :profesional_id',
    args: { ':profesional_id': profesionalId }
  })
  console.log("oficios: " + oficios);
  return oficios
}
const obtenerUsuarioId = async (email) => {
  const usuarioId = await DBTurso.execute({
    sql: 'SELECT usuario_id FROM usuarios WHERE email = :email',
    args: { ':email': email }
  })
  return usuarioId
}

const obtenerProfesionalId = async (usuarioId) => {
  const profesionalId = await DBTurso.execute({
    sql: 'SELECT profesional_id FROM profesionales WHERE usuario_id = :usuario_id',
    args: { ':usuario_id': usuarioId }
  })
  return profesionalId
}

const getDatosProfesional = async (req, res) => {
  try {
    const user = req.user;
    const email = user.reloadUserInfo.email;
    const profesional = await verificarRegistro(email);
    console.log(profesional);
    if (!profesional) {
      res.status(404).json({ error: 'Profesional no encontrado' });
    } else if (profesional.rows.length < 1) {
      res.status(200).json({ message: 'No se encontraron datos del profesional' });
    } else {
      const oficios = await obtenerOficiosDelProfesional(profesional.rows[0].profesional_id)
      res.status(200).json({ profesional: profesional.rows, oficios: oficios.rows });
    }
  } catch (error) {
    console.error('Error al obtener los datos del profesional:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// const postHorarioProfesional = async (req, res) => {
//   const { disponibilidad_horaria: horario, profesion } = req.body
//   try {
//     const user = req.user;
//     const email = user.reloadUserInfo.email;
//     const existeRegistro = await verificarRegistro(email)
//     const usuario_id = await obtenerUsuarioId(email)

//     if (existeRegistro.rows.length > 0) {
//       const actualizarHorario = await DBTurso.execute({
//         sql: 'UPDATE profesionales SET disponibilidad_horaria = :disponibilidad_horaria WHERE usuario_id = :usuario_id',
//         args: {
//           disponibilidad_horaria: horario,
//           usuario_id: usuario_id.rows[0].usuario_id
//         }
//       })
//       if (!actualizarHorario) {
//         res.status(500).json({ error: 'Error al registrar el nuevo horario' });
//       } else {
//         res.status(201).json({ mensaje: 'Disponibilidad horaria actualizada correctamente' });
//       }
//     } else {
//       const nuevoHorario = await DBTurso.execute({
//         sql: 'INSERT INTO profesionales (usuario_id, disponibilidad_horaria) VALUES (:usuario_id, :disponibilidad_horaria)',
//         args: {
//           usuario_id: usuario_id.rows[0].usuario_id,
//           disponibilidad_horaria: horario,
//         }
//       })
//       if (!nuevoHorario) {
//         res.status(500).json({ error: 'Error al registrar el nuevo horario' });
//       } else {
//         res.status(201).json({ mensaje: 'Horario registrado correctamente' });
//       }
//     }

//   } catch {
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// }




module.exports = {
  getDatosProfesional,
  // postHorarioProfesional
}