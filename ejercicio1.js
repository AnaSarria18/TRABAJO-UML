class Matrimonio {
    constructor(fecha, lugar) {
        this.fecha = fecha;
        this.lugar = lugar;
        this.contrayentes = [];
        this.juez = null;
        this.testigos = [];
    }

    agregarContrayentes(contrayentes) {
        this.contrayentes.push(...contrayentes);
    }

    agregarTestigos(testigos) {
        this.testigos.push(...testigos);
    }

    agregarAutoridad(juez) {
        this.juez = juez;
    }

    mostrarInformacion() {
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Lugar: ${this.lugar}`);

        console.log("contrayentes:");
        for (let i = 0; i < this.contrayentes.length; i++) {
            this.contrayentes[i].mostrarInformacion();
        }

        console.log("Juez:");
        this.juez.mostrarInformacion();

        console.log("Testigos:");
        for (let i = 0; i < this.testigos.length; i++) {
            this.testigos[i].mostrarInformacion();    
        }
    }
}

class Personas {
    constructor(nombre, apellidos, edad, sexo, domicilio) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
        this.domicilio = domicilio;
    }

    mostrarInformacion() {
        console.log (`Nombre: ${this.nombre} Apellidos: ${this.apellidos} Edad: ${this.edad} Sexo: ${this.sexo} Domicilio: ${this.domicilio} `)
      
    }
}

class Contrayentes extends Personas {
    mostrarInformacion() {
        super.mostrarInformacion();
    }
}



class Juez extends Personas {
    constructor(nombre, apellidos, edad, sexo, domicilio, cargo) {
        super(nombre, apellidos, edad, sexo, domicilio);
        this.cargo = cargo;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Cargo: ${this.cargo}`);
    }
}

class Testigos extends Personas {
    mostrarInformacion() {
        return super.mostrarInformacion();
    }
    
}

/* se crea la instancia de contrayentes */
let contrayente1 = new Contrayentes("Mario", "Rios", 26, "M", "Avenida 11");
let contrayente2 = new Contrayentes("Luisa", "Paja", 30, "F", "Calle 25");


/* se crea la instancia de juez */
let juez = new Juez("Alejandro", "Jambo", 45, "M", "Calle 89", "Juez matrimonial");

// se cre la instancia de Testigos
let testigo1 = new Testigos("Mariana", "Lopez", 35, "F", "Carrera 11");
let testigo2 = new Testigos("Jhon", "Sol", 44, "M", "Calle 20");

// se crea la instancia de Matrimonio
let matrimonio = new Matrimonio("30-04-2023", "cali-simon bolivar");


/* aqui vamos agregar los contaryentes el juez y testigos */
matrimonio.agregarContrayentes([contrayente1, contrayente2]);
matrimonio.agregarAutoridad(juez);
matrimonio.agregarTestigos([testigo1, testigo2]);


/* se muestra la informacion */
matrimonio.mostrarInformacion();







