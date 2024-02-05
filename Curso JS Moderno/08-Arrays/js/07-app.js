const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}
carrito.push(producto);

const producto2 = {
    nombre: 'Celular',
    precio: 800
}
carrito.push(producto2);// Push agrega al final del arreglo

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
carrito.unshift(producto3);// unshift agrega al inicio del arreglo

const producto4 = {
    nombre: 'Celular4',
    precio: 804
}
carrito.push(producto4);// Push agrega al final del arreglo

console.table(carrito);

// Eliminar ultimo elemento de un arreglo
carrito.pop();

// Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);