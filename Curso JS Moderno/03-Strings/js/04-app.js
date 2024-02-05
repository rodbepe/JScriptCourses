const producto = '                    Monitor 20 Pulgadas                       ';

console.log(producto);
console.log(producto.length);

// Eliminar del inicio.......
console.log( producto.trimStart() ); // al inicio
console.log( producto.trimEnd() ); // al final
console.log( producto.trimStart().trimEnd() ); // ambas nuevo metodo
console.log(producto.trim()); // ambas metodo viejo