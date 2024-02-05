"use strict";

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Seal permite la edicion de elementos existentes dentro del objeto epro no permite ni dar de alta ni eliminar desde el codigo
Object.seal(producto);
//producto.pais = 'Mexico';
//delete producto.nombre;
producto.disponible = false;
console.log(producto);

// Para saber si el objeto esta sellado
console.log(Object.isSealed(producto));
