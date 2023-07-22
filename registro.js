// registro.js

function validarRegistroForm(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;


  const nombreRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


  if (!nombreRegex.test(nombre)) {
    alert('El nombre debe contener solo letras y espacios.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Ingrese un correo electrónico válido.');
    return;
  }

  if (!contrasenaRegex.test(contrasena)) {
    alert('La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.');
    return
