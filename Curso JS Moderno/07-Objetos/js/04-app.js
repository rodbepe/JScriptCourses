const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

/* const nombre = producto.nombre;
 */

// Destructuring
const { nombre, precio, disponible, noExiste } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);
