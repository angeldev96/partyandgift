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
    // Se incluye el campo 'role' en la consulta y se asigna 'user' como valor predeterminado
    const query = 'INSERT INTO users (email, password, role) VALUES ($1, $2, $3)';
    // 'user' se pasa como tercer argumento en el arreglo de valores
    await pool.query(query, [email, password, 'user']);
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error);
    throw error;
  }
};

// Función para crear un nuevo empleado
const createemployee = async (email, password, nombre, apellido, cargo, role) => {
  try {
    // Se incluye el campo 'role' en la consulta
    const query = 'INSERT INTO employee (email, password, nombre, apellido, cargo, role) VALUES ($1, $2, $3, $4, $5, $6)';
    // Se pasa 'role' como sexto argumento en el arreglo de valores
    await pool.query(query, [email, password, nombre, apellido, cargo, role]);
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

const createProduct = async (img, title, quantity) => {
  try {
    const query = 'INSERT INTO product (img, title, quantity) VALUES ($1, $2, $3)';
    await pool.query(query, [img, title, quantity]);
  } catch (error) {
    console.error('Error al crear un nuevo producto:', error);
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