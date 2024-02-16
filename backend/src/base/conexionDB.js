const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const db_name = path.join(__dirname, 'nuevaDB.db')
const baseDeDatos = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message)
  } else {
    console.log("Conexion exitosa con la DB");
  }
})

module.exports = baseDeDatos