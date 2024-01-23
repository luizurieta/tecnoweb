class Presentacion {
  constructor() {
   this.textos = ["LA LARGA LLUVIA", "INICIAR", "CRÉDITOS", "A LOS RECIEN LLEGADOS AL PLANETA VENUS SE LES ROMPE LA NAVE", "OPCIÓN 1", "OPCIÓN 2", "INTENTAN REPARAR LA NAVE", "DECIDEN SALIR A EXPLORAR", "NO LOGRAN REPARAR LA NAVE, NI SOBREVIVIR AL CLIMA DEL NUEVO PLANETA", "REINICIAR", "SE ENCUENTRAN CON UNA TORMENTA MONSTRUOSA", "SIGUEN CAMINANDO", "ESPERAN QUE SE DETENGA", " LUEGO DE UNA LARGA CAMINATA EN LA INTERPERIE, SE ENCUENTRAN CON UNA SELVA", "EXPLORAR", "DOS SOLDADOS MUEREN POR LA LLUVIA ÁCIDA. HAY TOMAR UNA DECISIÓN ", "DECIDEN SEGUIR", "LLEGAN A UNA CÚPULA, ROTA Y SIN LUZ, CON LA ESPERANZA DE QUE SEA SU SALVACIÓN", "AL ENTRAR A LA CÚPULA, VEN QUE LAMENTABLEMENTE NO ES SU SALVACIÓN. LOS SOLDADOS RESTANTES DESCIENDEN EN LA LOCURA Y FALLECEN", "TRABAJO FINAL", "ALUMNOS: MATIAS GIORELLO Y LUCÍA IZURIETA", "PROFESOR: JOSE LUIS BUGIOLACHI" 
    
    ];
    this.boton = new Boton(0, 0);
    this.estado = new Estado(this);
    this.juego= new Juego();
    let imagenesRutas = ["data/primeraimagen.png", "data/instruccionesjuego.png", "data/cohete.jpg", "data/tormenta.jpg", "data/cupulaoscura(8).jpg", "data/cupula(9).jpg", "data/soldados(6).jpg", "data/nosobreviven.jpg", "data/soldadosmueren.jpg", "data/creditos.jpg"];
    this.imagen = new Imagen(imagenesRutas);
    this.juegoComenzado = false;
  }

  mostrar() {
     if (this.estado.estado === 0 || this.estado.estado === 1|| this.estado.estado === 2 || this.estado.estado === 5 || this.estado.estado === 3 ||this.estado.estado === 8||this.estado.estado === 9 ||this.estado.estado === 4 ||this.estado.estado === 6){
        this.imagen.mostrar(0, 0);
    }

    this.estado.mostrar();

    if (this.enestado7()) {
      if (!this.juegoComenzado) {
        this.juego.iniciarJuego();
        this.juegoComenzado = true;
      }
      this.juego.dibujarjuego();

      const estadoJuego = this.juego.actualizar();

      // Manejar mjs de victoria o derrota
      if (estadoJuego === "VICTORIA") {
        textSize(40);
        fill(0);
        textAlign(CENTER, CENTER);
        text("¡Has ganado!", width / 2, height / 2);
        textSize(29);
        text("¡Intenta mejorar tu tiempo, juega de nuevo presionando R!", width / 2, 500);
        //noLoop();
      } else if (estadoJuego === "DERROTA") {
        textSize(32);
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        text("¡Tiempo agotado! Perdiste.", width / 2, height / 2);
        text("¡Inténtalo de nuevo!, Presionando R", width / 2, 500);
        //noLoop();
      }
    }
  }
  //si esta en el estad que va el juego
  enestado7() {
    return this.estado.estado === 7;
  }

  teclas() {
    if (this.juegoComenzado) {
      this.juego.teclas();
    }
  }

  iniciarJuego() {
    this.juegoComenzado = true;
  }

  clicpresentacion() {
    this.estado.clicestado();
    if (this.enestado7() && !this.juegoComenzado) {
      this.juego.iniciarJuego();
      this.juegoComenzado = true;
    }
  }

}
