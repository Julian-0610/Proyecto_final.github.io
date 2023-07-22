// validacion.js
function validarNombre(nombre) {
  const nombreRegex = /^[a-zA-Z\s]+$/;
  return nombreRegex.test(nombre);
}

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validarContrasena(contrasena) {
  const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return contrasenaRegex.test(contrasena);
}

module.exports = {
  validarNombre,
  validarEmail,
  validarContrasena,
};
