// Parametros por default de uan funcion, cuando no se los pasas que valor ponen....

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Rodrigo');