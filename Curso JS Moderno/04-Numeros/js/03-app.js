let resultado;

// PI
resultado = Math.PI;

console.log(resultado);

// Redondear
resultado = Math.round(2.8);
console.log('2.8 redondeado es: ' + resultado);
resultado = Math.round(2.2);
console.log('2.2 redondeado es: ', resultado);

// Redondear hacia arriba
resultado = Math.ceil(2.1);
console.log("El resultado redondeado hacia arriba de 2.1 es: " + resultado);

// Redondear hacia abajo
resultado = Math.floor(2.8);
console.log("El resultado redondeado hacia abajo de 2.8 es: " + resultado);

// Raiz cuadrada de
resultado = Math.sqrt(144);
console.log("La raiz cuadrada de 144 es: " + resultado);

// Valor Absoluto
resultado = Math.abs(-500);
console.log("El valor absoluto de -500 es: " + resultado);

// Potencia de un número
resultado = Math.pow(8, 3); // 8 a la potencia de 3 
console.log("8 a la 3ra potencia es: " + resultado);

// Mostrar el valor minimo de una lista
resultado = Math.min(3, 4, 5, 1, 12, 2, -3);
console.log("El numero menor de los argumentos del arreglo dado es: " + resultado);

// Mostrar el valor máximo de una lista
resultado = Math.max(3, 4, 5, 1, 12, 2, -3);
console.log("El numero mayor de los argumentos del arreglo dado es: " + resultado);

// Número Aleatorio dentro de un rango........
resultado =Math.floor(Math.random()*30);
console.log("Un número aleatorio: " + resultado);