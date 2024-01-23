class Boton {
  constructor(x, y, ancho, alto) {
    this.px = x;
    this.py = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    fill(0);
    rect(this.px, this.py, this.ancho, this.alto);
  }

  clicEnBoton(mx, my) {
    return mx > this.px && mx < this.px + this.ancho &&
      my > this.py && my < this.py + this.alto;
  }
}
