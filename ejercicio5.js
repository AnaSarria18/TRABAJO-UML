
class Avion {
    constructor(capacidad) {
      this.capacidad = capacidad;
    }
  }
  
  class Vuelo {
    constructor(fecha, avion) {
      this.fecha = fecha; 
      this.avion = avion; 
      this.plazas = avion.capacidad; 
      this.billetes = []; 
    }
  
    venderBillete(pasajero) {
      if (this.plazas > 0) {
        let numeroAsiento = this.avion.capacidad - this.plazas + 1; 
        let billete = new Billete(pasajero, numeroAsiento, this.fecha); 
        this.billetes.push(billete); 
        this.plazas--; 
        return billete; 
      } 
    }
  }
  
  class Pasajero {
    constructor(nombre, apellidos, edad) {
      this.nombre = nombre; 
      this.apellidos = apellidos;
      this.edad = edad; 
    }
  }
  
  class Billete {
    constructor(pasajero, numeroAsiento, fechaVuelo) {
      this.pasajero = pasajero; 
      this.numeroAsiento = numeroAsiento; 
      this.fechaVuelo = fechaVuelo; 
    }
  
    mostrarinformacion() {
      return `Nombre: ${this.pasajero.nombre}, Apellidos: ${this.pasajero.apellidos}, Edad: ${this.pasajero.edad}, Asiento: ${this.numeroAsiento}, Fecha: ${this.fechaVuelo}`;
    }
  }
  
  class Compania {
    constructor(nombre) {
      this.nombre = nombre; 
      this.vuelos = []; 
      this.flota = []; 
    }
  
    anadirAvion(avion) {
      this.flota.push(avion);
    }
  
    ofertarVuelo(fecha, avion) {
      for (let i = 0; i < this.flota.length; i++) {
        if (this.flota[i] === avion) {
          let vuelo = new Vuelo(fecha, avion);
          this.vuelos.push(vuelo);
          return vuelo; 
        }
      }
    }
  }
  

  let compania = new Compania('Viajes Mundiales');
  let avion1 = new Avion(80); 
  compania.anadirAvion(avion1);
  
  let vuelo1 = compania.ofertarVuelo('2024-10-15', avion1); 
  let pasajero1 = new Pasajero('Sofia', 'Perez', 38);
  let pasajero2 = new Pasajero('Eduardo', 'Rios', 30);
  
  let billete1 = vuelo1.venderBillete(pasajero1);
  let billete2 = vuelo1.venderBillete(pasajero2);
  
  console.log(billete1.mostrarinformacion());
  console.log(billete2.mostrarinformacion());
  