// pacientesController.js
const db = require('../db'); // Importa la conexión a la base de datos

// Función para obtener todos los pacientes
exports.obtenerPacientes = (req, res) => {
  const sql = 'SELECT * FROM pacientes';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener los pacientes:', err);
      return res.status(500).json({ error: 'Error al obtener los pacientes' });
    }

    return res.status(200).json(result);
  });
};

 // Enviar la lista de pacientes a la página pacientes.html
    return res.render('pacientes', { pacientes: result });
  });
};

// Función para agregar un nuevo paciente
exports.agregarPaciente = (req, res) => {
  const { nombre, apellido, cedula, edad, telefono } = req.body;
  const sql = 'INSERT INTO pacientes (nombre, apellido, cedula, edad, telefono) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, apellido, cedula, edad, telefono];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al agregar el paciente:', err);
      return res.status(500).json({ error: 'Error al agregar el paciente' });
    }

    return res.status(201).json({ message: 'Paciente agregado exitosamente' });
  });
};

// Función para actualizar un paciente
exports.actualizarPaciente = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, cedula, edad, telefono } = req.body;
  const sql = 'UPDATE pacientes SET nombre = ?, apellido = ?, cedula = ?, edad = ?, telefono = ? WHERE id = ?';
  const values = [nombre, apellido, cedula, edad, telefono, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el paciente:', err);
      return res.status(500).json({ error: 'Error al actualizar el paciente' });
    }

    return res.status(200).json({ message: 'Paciente actualizado exitosamente' });
  });
};

// Función para eliminar un paciente
exports.eliminarPaciente = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM pacientes WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el paciente:', err);
      return res.status(500).json({ error: 'Error al eliminar el paciente' });
    }

    return res.status(200).json({ message: 'Paciente eliminado exitosamente' });
  });
};

