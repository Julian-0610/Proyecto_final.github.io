// pacientesController.js
const db = require('../db');

// Función para obtener todos los pacientes
exports.obtenerPacientes = (req, res) => {
  const sql = 'SELECT * FROM pacientes';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener los pacientes:', err);
      return res.status(500).json({ error: 'Error al obtener los pacientes' });
    }

    // Enviar la lista de pacientes a la página pacientes.html
    return res.render('pacientes', { pacientes: result });
  });
};
