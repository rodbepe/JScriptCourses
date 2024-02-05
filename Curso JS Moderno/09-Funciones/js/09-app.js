// Añadir funcioens en un objeto

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function () {
        console.log('Pausando......');
    },
    borrar: function (id) {
        console.log(`Borrando canción... ${id}`);
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre} `);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist con el nombre ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.borrar(30);
reproductor.crearPlaylist('Technito Sabrosongo');
reproductor.crearPlaylist('House Techno');
reproductor.reproducirPlaylist('Technito Sabrosongo');