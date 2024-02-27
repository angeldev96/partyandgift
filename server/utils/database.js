const { Pool } = require('pg');

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'partyandgift',
  password: 'admin',
  port: 5432, 
});

// Prueba de conexión directa
pool.connect()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Función para obtener un usuario por correo electrónico
const getUserByEmail = async (email) => {
  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0]; // Devuelve el primer usuario encontrado
  } catch (error) {
    console.error('Error al obtener el usuario por correo electrónico:', error);
    throw error;
  }
};

// Función para crear un nuevo usuario
const createUser = async (email, password) => {
  try {
    const query = 'INSERT INTO users (email, password) VALUES ($1, $2)';
    await pool.query(query, [email, password]);
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error);
    throw error;
  }
};

// Función para crear un nuevo empleado
const createemployee = async (email, password, nombre, apellido , cargo) => {
  try {
    const query = 'INSERT INTO employee (email, password, nombre, apellido , cargo) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [email, password, nombre, apellido , cargo]);
  } catch (error) {
    console.error('Error al crear un nuevo empleado:', error);
    throw error;
  }
};
// Función para obtener un empleado por correo electrónico
const getEmpleadoByEmail = async (email) => {
  try {
    const query = 'SELECT * FROM employee WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0]; // Devuelve el primer usuario encontrado
  } catch (error) {
    console.error('Error al obtener el usuario por correo electrónico:', error);
    throw error;
  }
};

// Función para actualizar la contraseña del usuario en la base de datos
async function updateUserPassword(userId, newPassword) {
  try {
    const query = 'UPDATE users SET password = $1 WHERE id = $2';
    await pool.query(query, [newPassword, userId]);
  } catch (error) {
    throw new Error('Error al actualizar la contraseña del usuario');
  }
}

// Función para el envio del producto
const createProduct = async (title, quantity, img) => {
  try {
    const query = 'INSERT INTO product (title, quantity, img) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [title, quantity, img]);
    return result.rows[0]; // Devuelve el producto recién creado
  } catch (error) {
    console.error('Error a la hora de registrar productos', error);
    throw error;
  }
};

// Función para obtener la lista de productos
const getProducts = async () => {
  try {
    const query = 'SELECT * FROM product';
    const { rows } = await pool.query(query);
    return rows; // Devuelve un array de productos
  } catch (error) {
    console.error('Error al obtener la lista de productos:', error);
    throw error;
  }
};


module.exports = {
  getUserByEmail,
  getEmpleadoByEmail,
  createemployee,
  createUser,
  updateUserPassword,
  createProduct,
  getProducts,
};