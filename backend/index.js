const express = require('express')
const cors = require('cors')
require('dotenv').config()
const router = require('./src/rutas/rutas')
const { swaggerDocs } = require('./src/rutas/swagger')

const app = express()

app.use(cors())

const PORT = process.env.PORT || 4321

const server = () => {
  app.listen(PORT, (err) => {
    if (err) {
      console.error('Error al iniciar el servidor:', err);
    } else {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
      swaggerDocs(app, PORT);
    }
  })
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

module.exports = { server }