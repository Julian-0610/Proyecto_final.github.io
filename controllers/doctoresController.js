// doctoresController.js

const db = require('../db'); // Importa la conexión a la base de datos

// Obtener todos los doctores
exports.obtenerDoctores = (req, res) => {
  const sql = 'SELECT * FROM doctores';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener los doctores:', err);
      return res.status(500).json({ error: 'Error al obtener los doctores' });
    }

    return res.status(200).json(result);
  });
};

// Enviar la lista de doctores a la página doctores.html
    return res.render('doctores', { doctores: result });
  });
};

// Agregar un nuevo doctor
exports.agregarDoctor = (req, res) => {
  const { nombre, apellido, especialidad, consultorio, correo_contacto } = req.body;
  const sql = 'INSERT INTO doctores (nombre, apellido, especialidad, consultorio, correo_contacto) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, apellido, especialidad, consultorio, correo_contacto];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al agregar el doctor:', err);
      return res.status(500).json({ error: 'Error al agregar el doctor' });
    }

    return res.status(201).json({ message: 'Doctor agregado exitosamente' });
  });
};

// Actualizar un doctor
exports.actualizarDoctor = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, especialidad, consultorio, correo_contacto } = req.body;
  const sql = 'UPDATE doctores SET nombre = ?, apellido = ?, especialidad = ?, consultorio = ?, correo_contacto = ? WHERE id = ?';
  const values = [nombre, apellido, especialidad, consultorio, correo_contacto, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el doctor:', err);
      return res.status(500).json({ error: 'Error al actualizar el doctor' });
    }

    return res.status(200).json({ message: 'Doctor actualizado exitosamente' });
  });
};

// Eliminar un doctor
exports.eliminarDoctor = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM doctores WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el doctor:', err);
      return res.status(500).json({ error: 'Error al eliminar el doctor' });
    }

    return res.status(200).json({ message: 'Doctor eliminado exitosamente' });
  });
};
