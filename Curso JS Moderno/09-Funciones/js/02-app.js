// Por el hopsting en está iteracion crea primero la funcion haciendola reutilizabel
sumar();
function sumar() {
    console.log(2 + 2);
}

// Esta iteracion por el hoisting nos obliga a inicializar primero la funcion y despues la puedes usar
sumar2();
const sumar2 = function () {
    console.log(3 + 3);
}
