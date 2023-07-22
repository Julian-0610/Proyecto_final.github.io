// validacion.test.js
const { validarNombre, validarEmail, validarContrasena } = require('./validacion');

test('Validar nombre con caracteres válidos', () => {
  expect(validarNombre('Juan')).toBe(true);
});

test('Validar nombre con caracteres inválidos', () => {
  expect(validarNombre('123')).toBe(false);
});

test('Validar email con formato válido', () => {
  expect(validarEmail('correo@example.com')).toBe(true);
});

test('Validar email con formato inválido', () => {
  expect(validarEmail('correo@ejemplo')).toBe(false);
});

test('Validar contraseña válida', () => {
  expect(validarContrasena('Abc12345')).toBe(true);
});

test('Validar contraseña inválida', () => {
  expect(validarContrasena('abc123')).toBe(false);
});
