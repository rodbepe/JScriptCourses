const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }

]

console.log('Ciclo for loop: ');
for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

console.log('Ciclo for loop con metodos de arreglo: ');
carrito.forEach(function (producto) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
})