const request = require('supertest');
const { app, server } = require('./index'); // Suponiendo que 'index.js' es tu archivo principal de la aplicación Express

afterAll(() => {
  server.close()
})


describe('POST /api/inicioCliente', () => {
  test('debería devolver un código de estado 201 y un mensaje de éxito', async () => {
    const datosUsuario = { nombre: 'Usuario de prueba', email: 'prueba@example.com' };

    const respuesta = await request(app)
      .post('/api/inicioCliente')
      .send(datosUsuario)
      .set('Accept', 'application/json');

    expect(respuesta.status).toBe(201);
    expect(respuesta.body).toEqual({
      mensaje: 'Cliente logeado correctamente'
    });
  }, 10000);
});
describe('POST /api/inicioProfesional', () => {
  test('debería devolver un código de estado 201 y un mensaje de éxito', async () => {
    const datosUsuario = { nombre: 'Usuario de prueba', email: 'prueba@example.com' };

    const respuesta = await request(app)
      .post('/api/inicioProfesional')
      .send(datosUsuario)
      .set('Accept', 'application/json');

    expect(respuesta.status).toBe(201);
    expect(respuesta.body).toEqual({
      mensaje: 'Profesional logeado correctamente'
    });
  }, 10000);
});

describe('POST /api/registroclientes', () => {
  test('debería devolver un código de estado 201 y un mensaje de éxito', async () => {
    // Datos de cliente de prueba
    const datosCliente = {
      nombre: 'Nuevo2',
      apellido: 'Cliente2',
      email: 'nuevo_cliente2@example.com',
      codigo_postal: '543222',
      ciudad: 'Otra Ciudad2',
      provincia: 'Otra Provincia2',
      password: 'otra_contraseña2'
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