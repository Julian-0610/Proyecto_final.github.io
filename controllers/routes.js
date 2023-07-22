const express = require('express');
const router = express.Router();

const pacientesController = require('./pacientesController');
const doctoresController = require('./doctoresController');
const citasController = require('./citasController');

// Rutas para pacientes
router.get('/pacientes', pacientesController.obtenerPacientes);
router.post('/pacientes', pacientesController.agregarPaciente);
router.put('/pacientes/:id', pacientesController.actualizarPaciente);
router.delete('/pacientes/:id', pacientesController.eliminarPaciente);

// Rutas para doctores
router.get('/doctores', doctoresController.obtenerDoctores);
router.post('/doctores', doctoresController.agregarDoctor);
router.put('/doctores/:id', doctoresController.actualizarDoctor);
router.delete('/doctores/:id', doctoresController.eliminarDoctor);

// Rutas para citas médicas
router.get('/citas', citasController.obtenerCitas);
router.post('/citas', citasController.agregarCita);
router.put('/citas/:id', citasController.actualizarCita);
router.delete('/citas/:id', citasController.eliminarCita);

module.exports = router;
