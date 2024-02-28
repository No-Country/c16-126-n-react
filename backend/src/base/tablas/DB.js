// ESTE ARCHIVO CORRESPONDE A LA NUEVA BASE DE DATOS DE MYSQL

const { createPool } = require('mysql2/promise')


const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '37Franco57#',
  database: 'allservicesapi',
  port: 3306
})

module.exports = { pool }