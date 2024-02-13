const { Pool } = require('pg');

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'partyandgift',
  password: 'maiden',
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

module.exports = {
  getUserByEmail,
  createUser
};
