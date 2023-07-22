// validacion.test.js
const { validarNombre, validarEmail, validarContrasena } = require('./validacion');

test('Validar nombre con caracteres v�lidos', () => {
  expect(validarNombre('Juan')).toBe(true);
});

test('Validar nombre con caracteres inv�lidos', () => {
  expect(validarNombre('123')).toBe(false);
});

test('Validar email con formato v�lido', () => {
  expect(validarEmail('correo@example.com')).toBe(true);
});

test('Validar email con formato inv�lido', () => {
  expect(validarEmail('correo@ejemplo')).toBe(false);
});

test('Validar contrase�a v�lida', () => {
  expect(validarContrasena('Abc12345')).toBe(true);
});

test('Validar contrase�a inv�lida', () => {
  expect(validarContrasena('abc123')).toBe(false);
});
