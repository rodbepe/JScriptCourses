"use strict";

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}


// Freeze congela el objeto restringiendo agregar eliminar o editar informacion hace que se comporte como constante aunque sea un objeto
Object.freeze(producto);
console.log(producto);
console.log(Object.isFrozen(producto));

/* producto.disponible = false;
producto.imagen = "imagen.jpg"; */

/* 
x = 20;
console.log(x); */