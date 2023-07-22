// citasController.js

const db = require('../db'); // Importa la conexi�n a la base de datos

// Obtener todas las citas m�dicas
exports.obtenerCitas = (req, res) => {
  const sql = 'SELECT * FROM citas_medicas';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener las citas m�dicas:', err);
      return res.status(500).json({ error: 'Error al obtener las citas m�dicas' });
    }

    return res.status(200).json(result);
  });
};

// Enviar la lista de citas a la p�gina citas.html
    return res.render('citas', { citas: result });
  });
};

// Agregar una nueva cita m�dica
exports.agregarCita = (req, res) => {
  const { numero_documento_paciente, especialidad } = req.body;
  const sql = 'INSERT INTO citas_medicas (numero_documento_paciente, especialidad) VALUES (?, ?)';
  const values = [numero_documento_paciente, especialidad];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al agregar la cita m�dica:', err);
      return res.status(500).json({ error: 'Error al agregar la cita m�dica' });
    }

    return res.status(201).json({ message: 'Cita m�dica agregada exitosamente' });
  });
};

// Actualizar una cita m�dica
exports.actualizarCita = (req, res) => {
  const { id } = req.params;
  const { numero_documento_paciente, especialidad } = req.body;
  const sql = 'UPDATE citas_medicas SET numero_documento_paciente = ?, especialidad = ? WHERE id = ?';
  const values = [numero_documento_paciente, especialidad, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar la cita m�dica:', err);
      return res.status(500).json({ error: 'Error al actualizar la cita m�dica' });
    }

    return res.status(200).json({ message: 'Cita m�dica actualizada exitosamente' });
  });
};

// Eliminar una cita m�dica
exports.eliminarCita = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM citas_medicas WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar la cita m�dica:', err);
      return res.status(500).json({ error: 'Error al eliminar la cita m�dica' });
    }

    return res.status(200).json({ message: 'Cita m�dica eliminada exitosamente' });
  });
};
