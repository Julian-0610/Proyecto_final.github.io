const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('views'));

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

app.use('/', routes);

const port = 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});


