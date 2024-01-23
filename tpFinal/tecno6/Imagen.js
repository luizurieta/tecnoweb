class Imagen {
  constructor(rutas) {
    this.rutas = rutas;
    this.imagenes = [];
    this.ancho = 0;
    this.alto = 0;
    this.indiceImagenActual = 0;

   
    for (let i = 0; i < this.rutas.length; i++) {
      this.cargarImagen(i);
    }
  }

  cargarImagen(indice) {
    this.imagenes[indice] = loadImage(this.rutas[indice], () => {
      this.ancho = this.imagenes[indice].width;
      this.alto = this.imagenes[indice].height;
    }
    );
  }

  mostrar(x, y, ancho = this.ancho, alto = this.alto) {
    if (this.imagenes[this.indiceImagenActual]) {
      image(this.imagenes[this.indiceImagenActual], x, y, ancho, alto);
    }
  }

  cambiarImagen(indice) {
    if (indice >= 0 && indice < this.rutas.length) {
      this.indiceImagenActual = indice;
    }
  }
}
