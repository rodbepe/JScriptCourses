const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

// Eliminar proiedades de objeto
delete producto.disponible;

console.log(producto);