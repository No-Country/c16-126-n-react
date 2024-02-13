const request = require('supertest');
const { app, server } = require('./index'); // Suponiendo que 'index.js' es tu archivo principal de la aplicación Express

afterAll(() => {
  server.close()
})

describe('Prueba de la ruta GET /api/login para clientes', () => {
  test('Debería devolver un código de estado HTTP 200', async () => {
    const response = await request(app).get('/api/login');
    expect(response.statusCode).toBe(200);
  });
});


describe('POST /api/login', () => {
  test('debería devolver un código de estado 201 y un mensaje de éxito', async () => {
    const datosUsuario = { nombre: 'Usuario de prueba', email: 'prueba@example.com' };

    const respuesta = await request(app)
      .post('/api/login')
      .send(datosUsuario)
      .set('Accept', 'application/json');

    expect(respuesta.status).toBe(201);
    expect(respuesta.body).toEqual({
      mensaje: 'Usuario logeado correctamente'
    });
  }, 10000);
});

describe('POST /api/registroclientes', () => {
  test('debería devolver un código de estado 201 y un mensaje de éxito', async () => {
    // Datos de cliente de prueba
    const datosCliente = {
      nombre: 'Nuevo',
      apellido: 'Cliente',
      email: 'nuevo_cliente@example.com',
      ciudad: 'Otra Ciudad',
      provincia: 'Otra Provincia',
      codigoPostal: '54321',
      direccion: 'Otra Dirección',
      password: 'otra_contraseña'
    };

    // Realiza una solicitud POST con los datos de cliente
    const respuesta = await request(app)
      .post('/api/registroclientes')
      .send(datosCliente)
      .set('Accept', 'application/json');

    // Verifica que la respuesta tenga el código de estado esperado
    expect(respuesta.status).toBe(201);
    // Verifica que la respuesta tenga el cuerpo esperado
    expect(respuesta.body).toEqual({
      mensaje: 'Usuario creado correctamente'
    });
  });
});