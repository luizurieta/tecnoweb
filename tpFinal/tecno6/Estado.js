class Estado {
  constructor(presentacion) {
    this.estado = 0;
    this.botones = [
      new Boton(330, 500, 140, 60), //iniciar
      new Boton(310, 600, 180, 60), //creditos
      new Boton(550, 500, 170, 60), //botón del 1 al 3 (op 2)
      new Boton(50, 500, 170, 60), //boton del 1 al 4 (op 1)
    ];
    this.presentacion = presentacion;
  }


  mostrar() {
    // Esto carga los botones
    for (let i = 0; i < this.botones.length; i++) {
      this.botones[i].mostrar();
    }
    this.presentacion.imagen.cambiarImagen(this.estado);
    this.presentacion.imagen.mostrar(0, 0, 800, 800);
    if (this.estado === 0) { //inicio
      noStroke();
      background (200);
      fill(27, 167, 108);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      textSize(20);
      textAlign(CENTER);
      rect(330, 500, 140, 60, 10);
      rect(310, 600, 180, 60, 10);
      fill(167, 81, 27);
      textSize(26);
      text(presentacion.textos[1], width / 2, 540);
      text(presentacion.textos[2], width / 2, 640);
    } else if (this.estado === 2) { //llegan a venus
      // btn iniciar va aca
      this.presentacion.imagen.cambiarImagen(2);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      textSize(20);
      fill(255, 50);
      noStroke();
      rect(50, 80, 700, 80);
      fill(0);
      text(presentacion.textos[3], 60, 100, 700);
      fill(167, 81, 27);
      rect(550, 500, 170, 50, 10); // op 2
      rect(50, 500, 170, 50, 10); // op 1
      textSize (16);
      fill(27, 167, 108);
      text(presentacion.textos[6], 46, 510, 180); // op 1
      text(presentacion.textos[7], 535, 510, 200);
    } else if (this.estado === 1) { //CRÉDITOS
      this.presentacion.imagen.cambiarImagen(9);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      fill (0, 100);
      rect (50, 50, 700, 700);
      fill(167, 81, 27);
      rect(310, 600, 180, 60, 10);
      fill(255, 100);
      textSize (28);
      text(presentacion.textos[9], 400, 640);
      text(presentacion.textos[20], 400, 300);
      text(presentacion.textos[21], 380, 380);
      textSize (32);
      text(presentacion.textos[2], 400, 100);
      text(presentacion.textos[19], 400, 150);
    } else if (this.estado === 4) { //FALLECEN - PRIMER FLUJO OPCIÓN 1
      this.presentacion.imagen.cambiarImagen(7);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      noStroke();
      textSize (20);
      fill(255, 50);
      rect(50, 80, 700, 80);
      fill(0);
      text(presentacion.textos[8], 100, 100, 650);
      fill(27, 167, 108);
      rect(310, 600, 180, 60, 10);
      fill(167, 81, 27);
      text(presentacion.textos[9], 345, 620, 120);
    } else if (this.estado === 3) { // TORMENTA MOSNTRUOSA . FLUJO B
      this.presentacion.imagen.cambiarImagen(3);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      noStroke ();
      fill(255, 50);
      rect(50, 80, 700, 80);
      fill(0);
      textSize(20);
      text(presentacion.textos[10], 110, 110, 600);
      fill(167, 81, 27);
      rect(550, 500, 170, 50, 10); // op 2
      rect(50, 500, 170, 50, 10); // op 1
      textSize (16);
      fill(27, 167, 108);
      text (presentacion.textos[11], 60, 510, 150);
      text (presentacion.textos[12], 565, 510, 150);
    } else if ( this.estado === 6) {
      this.presentacion.imagen.cambiarImagen(8);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      noStroke ();
      fill(255, 50);
      rect(50, 80, 700, 80);
      fill(0);
      textSize(20);
      text(presentacion.textos[15], 60, 100, 700);
      fill(167, 81, 27);
      rect(550, 500, 170, 50, 10); // op 2
      rect(50, 500, 170, 50, 10); // op 1
      textSize (16);
      fill(27, 167, 108);
      text (presentacion.textos[9], 90, 520, 100);
      text (presentacion.textos[16], 565, 520, 150);
    } else if (this.estado === 5 ) {
      this.presentacion.imagen.cambiarImagen(1);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      noStroke ();
      textSize (20);
      fill(255, 50);
      rect(50, 80, 700, 80);
      fill(0);
      text(presentacion.textos[13], 60, 100, 700);
      fill(27, 167, 108);
      rect(310, 600, 180, 60, 10);
      fill(167, 81, 27);
      text(presentacion.textos[14], 350, 620, 100);
    } else if (this.estado === 7) {
      background (0); //ACÁ VA EL JUEGO
    } else if ( this.estado === 8) {
      this.presentacion.imagen.cambiarImagen(4);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      noStroke ();
      textSize (20);
      fill(255, 50);
      rect(50, 80, 700, 80);
      fill(0);
      text(presentacion.textos[17], 80, 100, 650);
      fill(27, 167, 108);
      rect(310, 600, 180, 60, 10);
      fill(167, 81, 27);
      text(presentacion.textos[14], 350, 620, 100);
    } else if ( this.estado === 9) {
      noStroke ();
      this.presentacion.imagen.cambiarImagen(5);
      this.presentacion.imagen.mostrar(0, 0, 800, 800);
      textSize (20);
      fill(255, 50);
      rect(50, 80, 700, 90);
      fill(0);
      text(presentacion.textos[18], 70, 90, 650);
      fill(27, 167, 108);
      rect(310, 600, 180, 60, 10);
      fill(167, 81, 27);
      text(presentacion.textos[9], 350, 620, 100);
    }
  }


  clicestado() {
    // Verificar clic en botones
    for (let i = 0; i < this.botones.length; i++) {
      let botonActual = this.botones[i];

      // clic está dentro de las coordenadas del botón
      if (
        mouseX > botonActual.px &&
        mouseX < botonActual.px + botonActual.ancho &&
        mouseY > botonActual.py &&
        mouseY < botonActual.py + botonActual.alto
        ) {
        if (this.estado === 0) {
          if (i === 0) {
            this.estado = 2; // Botón 'Iniciar'
          } else if (i === 1) {
            this.estado = 1; // Botón 'Creditos'
          }
        } else if (this.estado === 2) {
          if (i === 2) {
            this.estado = 3; // Botón estado 1 al 3
          } else if (i === 3) {
            this.estado = 4; // Botón estado 1 al 4
          }
        } else if (this.estado === 3) {
          if (i === 2) {
            this.estado = 6;
          } else if ( i=== 3) {
            this.estado =5;
          }
        } else if (this.estado === 4) {
          if ( i=== 1) {
            this.estado = 0;
          }
        } else if ( this.estado === 6) {
          if ( i===2) {
            this.estado = 8;
          } else if ( i === 3 ) {
            this.estado = 0;
          }
        } else if (this.estado === 8) {
          if ( i=== 1) {
            this.estado = 9;
          }
        } else if (this.estado === 9) {
          if (i === i) {
            this.estado =0;
          }
        } else if (this.estado === 5) {
          if ( i=== 1) {
            this.estado = 7;
          }
        } else if (this.estado === 1) {
          if (i ===1 ) {
            this.estado =0;
          }
        }
        return;
      }
    }
  }
}
