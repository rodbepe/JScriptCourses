const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20.2;

console.log(numero1);
console.log(Number.parseInt(numero1)); // Convierte a entero
console.log(Number.parseFloat(numero2)); // Convierte a flotante
console.log(Number.parseInt(numero3)); // Ejecuta una comprobacion donde NaN (Not a Number)

// Revisar si un número es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));