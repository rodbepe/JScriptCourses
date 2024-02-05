const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring
const { nombre } = producto;
console.log(nombre);

// DESTRUCTUIRING CON ARREGLOS
const numeros = [10, 20, 30, 40, 50];

const [primero, ...tercero] = numeros;
console.log(tercero);



