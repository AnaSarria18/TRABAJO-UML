class Autor {
    constructor(nombre, nacionalidad, fechaNacimiento) {
      this.nombre = nombre;
      this.nacionalidad = nacionalidad;
      this.fechaNacimiento = fechaNacimiento;
    }
  }
  
  class Libro {
    constructor(nombre, tipo, editorial, año, autor) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.editorial = editorial;
      this.año = año;
      this.autor = autor;
    }
  }
  
  class Copia {
    constructor(id, libro) {
      this.id = id;
      this.libro = libro;
      this.estado = 'BIBLIOTECA';
      this.fechaPrestamo = null;
      this.fechaDevolucion = null;
    }
  
    prestarLibro(fecha) {
      if (this.estado === 'BIBLIOTECA') {
        this.estado = 'PRESTADO';
        this.fechaPrestamo = fecha;
        console.log(`El libro ${this.libro.nombre} ha sido prestado.`);
      } else {
        console.log('no está disponible para préstamo.');
      }
    }
  
    devolverLibro(fecha) {
      if (this.estado === 'PRESTADO') {
        this.estado = 'BIBLIOTECA';
        this.fechaDevolucion = fecha;
        console.log(`El libro ${this.libro.nombre} ha sido devuelto.`);
      } else {
        console.log('La copia no está prestada.');
      }
    }
  }
  
  class Lector {
    constructor(nombre) {
      this.nombre = nombre;
      this.librosPrestados = [];
    }
  
    prestarLibro(copia) {
      if (this.librosPrestados.length < 5) {
        this.librosPrestados.push(copia);
        copia.prestarLibro("2024-05-12");
      } else {
        console.log('Has alcanzado el límite de libros prestados.');
      }
    }
  
    devolverLibro(copia) {
        let librosPrestadosActualizados = [];
      
        for (let i = 0; i < this.librosPrestados.length; i++) {
          if (this.librosPrestados[i] !== copia) {
            librosPrestadosActualizados.push(this.librosPrestados[i]);
          } else {
            copia.devolverLibro(); 
          }
        }
      
        this.librosPrestados = librosPrestadosActualizados;
      
        console.log('Libro devuelto correctamente.');
      }
  }
  
  class Biblioteca {
    constructor() {
      this.libros = [];
      this.lectores = [];
    }
  
    agregarLibro(libro) {
      this.libros.push(libro);
    }
  
    agregarLector(lector) {
      this.lectores.push(lector);
    }
  
    prestarLibro(lector, libroId) {
        for (let i = 0; i < this.libros.length; i++) {
          if (this.libros[i].libro.nombre === libroId) {
            let copia = this.libros[i];
            if (!copia.prestado) {
              copia.prestado = true;
              lector.librosPrestados.push(copia);
              console.log('Libro prestado.');
            } else {
              console.log('El libro ya está prestado.');
            }
          }
        }
        console.log('El libro no se encuentra en su biblioteca.');
      }

      devolverLibro(lector, libroId) {
        const libroporId = this.librosPorId[libroId];
      
        if (libroporId) {
          let nuevosLibrosPrestados = [];
          for (let libro of lector.librosPrestados) {
            if (libro.id !== libroId) {
              nuevosLibrosPrestados.push(libro);
            }
          }
          lector.librosPrestados = nuevosLibrosPrestados;
      
          console.log('Libro devuelto.');
        } else {
          console.log('El libro no se encuentra en la biblioteca.');
        }
      }

      mostrarEstado() {
        console.log("Estado actual de la biblioteca:", "Libros:" );
        for (let i = 0; i < this.libros.length; i++) {
            let libro = this.libros[i];
            console.log("- " + libro.nombre + ", Autor: " + libro.autor.nombre);
        }
        console.log("Lectores:");
        for (let i = 0; i < this.lectores.length; i++) {
            let lector = this.lectores[i];
            console.log(`  ${lector.nombre}:`);
            for (let k = 0; k < lector.librosPrestados.length; k++) {
                let copia = lector.librosPrestados[k];
                console.log("    - " + copia.libro.nombre + " (Estado: " + copia.estado + ")");
            }
        }
    }
  }
  

let autor1 = new Autor("Gabriel García Márquez", "Colombiana", "1927-03-06");
let autor2 = new Autor("Isabel Allende", "Chile", "1942-08-2");


let libro1 = new Libro("Cien años de soledad", "Novela", "Editorial Sudamericana", 1967, autor1);
let libro2 = new Libro("La casa de los espíritus", "Novela", "Plaza & Janés", 1982, autor2);


let copia1 = new Copia(1, libro1);
let copia2 = new Copia(2, libro2);


let lector1 = new Lector("Ana Maria");
let lector2 = new Lector("Diana Rios");


let biblioteca = new Biblioteca();


biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLector(lector1);
biblioteca.agregarLector(lector2);


lector1.prestarLibro(copia1);
lector1.devolverLibro(copia1);

biblioteca.mostrarEstado();
