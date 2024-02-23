// Importar las dependencias necesarias
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./utils/database'); 
const cors = require('cors');

// Crear una instancia de Express
const app = express();

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Middleware para analizar solicitudes codificadas en URL
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para manejar sesiones de usuario
app.use(session({
  secret: 'maiden', // Cambia esta clave por una segura en un entorno de producción
  resave: false,
  saveUninitialized: false
}));

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Ruta para el inicio de sesión
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Busca el usuario en la base de datos
  const user = await db.getUserByEmail(email);
  if (!user) {
    return res.status(401).send('Usuario no encontrado');
  }
  // Comprueba la contraseña
  if (bcrypt.compareSync(password, user.password)) {
    req.session.userId = user.id;
    return res.send('Inicio de sesión exitoso');
  } else {
    return res.status(401).send('Correo electrónico o contraseña incorrectos');
  }
});

// Ruta para el registro de usuarios
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  // Comprueba si el usuario ya existe en la base de datos
  const existingUser = await db.getUserByEmail(email);
  if (existingUser) {
    return res.status(400).send('El correo electrónico ya está en uso');
  }
  
  // Crea un nuevo usuario
  const hashedPassword = bcrypt.hashSync(password, 10);
  await db.createUser(email, hashedPassword);
  return res.send('Usuario registrado exitosamente');
});

// Ruta para cerrar sesión
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.send('Sesión cerrada exitosamente');
});

// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});

// Ruta de registro empleado
app.post('/register/empleado', async (req, res) => {
  const { email, password, nombre, apellido, cargo } = req.body;

  // Comprueba si el empleado ya existe en la base de datos
  const existingEmpleado = await db.getEmpleadoByEmail(email);
  if (existingEmpleado) {
    return res.status(400).send('El correo electrónico ya está en uso');
  }

  // Crea un nuevo empleado
  const hashedPassword = bcrypt.hashSync(password, 10);
  await db.createemployee(email, hashedPassword, nombre, apellido, cargo);
  return res.send('Empleado registrado exitosamente');
});

// Ruta para el inicio de sesión de empleados
app.post('/login/empleado', async (req, res) => {
  const { email, password } = req.body;
  // Busca el empleado en la base de datos
  const empleado = await db.getEmpleadoByEmail(email);
  if (!empleado) {
    return res.status(401).send('Empleado no encontrado');
  }
  // Comprueba la contraseña
  if (bcrypt.compareSync(password, empleado.password)) {
    req.session.empleadoId = empleado.id;
    return res.send('Inicio de sesión de empleado exitoso');
  } else {
    return res.status(401).send('Correo electrónico o contraseña incorrectos');
  }
});