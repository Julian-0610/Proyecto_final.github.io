// db.js
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Villadelrosario1-',
  database: 'mi_proyecto_db' 
});

// Conecta a la base de datos MySQL
mysqlConnection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

module.exports = mysqlConnection;
