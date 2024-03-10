const { Pool } = require('pg');
const bcrypt = require('bcrypt');


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
// Función para actualizar un producto por su ID
const updateProduct = async (productId, updatedFields) => {
  const { img, title, quantity } = updatedFields;
  try {
    const query = 'UPDATE product SET img = $1, title = $2, quantity = $3 WHERE id = $4';
    await pool.query(query, [img, title, quantity, productId]);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
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

// Función para obtener un producto por su ID
const getProductById = async (productId) => {
  try {
    const query = 'SELECT * FROM product WHERE id = $1'; // Utiliza un parámetro de consulta para evitar SQL injection
    const { rows } = await pool.query(query, [productId]);
    // Si no se encuentra ningún producto con el ID dado, retorna null
    if (rows.length === 0) {
      return null;
    }
    // Devuelve el primer producto encontrado (debería ser único ya que el ID es único)
    return rows[0];
  } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    throw error;
  }
};


const createDefaultAdmin = async () => {
  try {
    const email = 'admin@admin.com';
    const password = 'party20and24gift';
    const nombre = 'admin';
    const apellido = 'admin';
    const cargo = 'admin';
    const role = 'admin';

    // Check if the admin user already exists
    const existingAdmin = await pool.query('SELECT * FROM employee WHERE email = $1', [email]);
    if (existingAdmin.rows.length > 0) {
      console.log('Default admin user already exists');
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the default admin user
    const query = 'INSERT INTO employee (email, password, nombre, apellido, cargo, role) VALUES ($1, $2, $3, $4, $5, $6)';
    await pool.query(query, [email, hashedPassword, nombre, apellido, cargo, role]);

    console.log('Default admin user created successfully');
  } catch (error) {
    console.error('Error creating default admin user:', error);
  }
};

// Función para eliminar un producto por su ID
const deleteProduct = async (productId) => {
  try {
    const query = 'DELETE FROM product WHERE id = $1';
    await pool.query(query, [productId]);
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    throw error;
  }
};


// Función para crear envio de pedido
const createaddress = async (nombre, apellido, direccion, ciudad, email, telefono, id_orders) => {
  try {
    const query = 'INSERT INTO addresses (nombre, apellido, direccion, ciudad, email, telefono, id_orders) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    await pool.query(query, [nombre, apellido, direccion, ciudad, email, telefono, id_orders]);
  } catch (error) {
    console.error('Error al enviar la direccion de pedido:', error);
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
  createDefaultAdmin,
  getProductById,
  updateProduct,
  createaddress,
  deleteProduct,

};