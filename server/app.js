// Importar las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./utils/database'); 
const cors = require('cors');
const jwt = require('jsonwebtoken');


// Crear una instancia de Express
const app = express();

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Middleware para analizar solicitudes codificadas en URL
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173', // Specify the allowed origin
  methods: ['GET', 'POST'],        // Allow specific methods
  credentials: true                 // To allow sending of cookies
})); 

// Route for login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Search for the user in the database
  const user = await db.getUserByEmail(email);
  if (!user) {
    return res.status(401).send('User not found');
  }
  // Check the password
  if (bcrypt.compareSync(password, user.password)) {
    let token = jwt.sign({id: user.id}, 'secretkey', { expiresIn: '1h' });
    return res.json({message: 'Successful login', token: token});
  } else {
    return res.status(401).send('Incorrect email or password');
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

// Ruta de registro empleado
app.post('/register/empleado', async (req, res) => {
  const { email, password, nombre, apellido, cargo, role } = req.body; // Se obtiene también el campo 'role' del cuerpo de la solicitud

  // Comprueba si el empleado ya existe en la base de datos
  const existingEmpleado = await db.getEmpleadoByEmail(email);
  if (existingEmpleado) {
    return res.status(400).send('El correo electrónico ya está en uso');
  }

  // Crea un nuevo empleado
  const hashedPassword = bcrypt.hashSync(password, 10);
  await db.createemployee(email, hashedPassword, nombre, apellido, cargo, role); // Se pasa el campo 'role' a la función createemployee
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
    let token = jwt.sign({id: empleado.id}, 'secret key', {expiresIn: '1h'});
    return res.json({message:'Inicio de sesión de empleado exitoso',token: token});
  } else {
    return res.status(401).send('Correo electrónico o contraseña incorrectos');
  }
});

// Ruta para registrar un nuevo producto
app.post('/products', async (req, res) => {
  const { img, title, quantity } = req.body;
  
  try {
    // Crea un nuevo producto en la base de datos
    await db.createProduct(img, title, quantity);
    res.status(201).send('Producto creado exitosamente');
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).send('Error interno del servidor');
  }
});


// Ruta para el envio del formulario del producto
app.post('/register/product', async (req, res) => {
  const { img, title, quantity } = req.body
  try {
      const result = await pool.query("INSERT INTO product (img, title, quantity) VALUES ($1, $2, $3) RETURNING *", [ 
          img,
          title,
          quantity
      ]);

      res.json(result.rows[0]);
  } catch (error) {
      next(error)
  }
})

const authenticateToken = require('./middleware/auth');

// Ruta para cambiar la contraseña del usuario
app.post('/change-password', authenticateToken, async (req, res) => {
  const { newPassword } = req.body;
  const userId = req.user.id; // Obtener el ID del usuario del token
  
  // Actualizar la contraseña en la base de datos
  const hashedPassword = bcrypt.hashSync(newPassword, 10);
  await db.updateUserPassword(userId, hashedPassword);
  
  res.send('Contraseña cambiada exitosamente');
});



// Ruta para obtener la lista de productos
app.get('/product_list', async (req, res) => {
  try {
    const products = await db.getProducts(); // Obtener la lista de productos desde la base de datos
    res.json(products);
  } catch (error) {
    console.error('Error al obtener la lista de productos:', error);
    res.status(500).json({ error: 'Error al obtener la lista de productos' });
  }
});



app.get('/user_settings', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});


// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});


