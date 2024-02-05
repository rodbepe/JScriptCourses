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
console.table(carrito);