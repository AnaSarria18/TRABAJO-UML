class Empresa {
    constructor(cliente, empleado) {
        this.cliente = cliente;
        this.empleado = empleado;
    }

    listaClientes() {
        console.log('Información del Cliente:');
        this.cliente.mostrarInformacion();
    }

    listaEmpleados() {
        console.log('Información del Empleado:');
        this.empleado.mostrarInformacion();
    }
}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarNombre() {
        console.log(`Nombre: ${this.nombre}`);
    }

    mostrarEdad() {
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, sueldoBruto) {
        super(nombre, edad);
        this.sueldoBruto = sueldoBruto;
    }

    sueldoBruto() {
        return this.sueldoBruto;
    }

    mostrarInformacion() {
        this.mostrarNombre();
        this.mostrarEdad();
        console.log(`Sueldo Bruto: ${this.sueldoBruto}`);
    }
}

class Cliente extends Persona {
    constructor(nombre, edad, telefonoContacto) {
        super(nombre, edad);
        this.telefonoContacto = telefonoContacto;
    }

    telefonoContacto() {
        return this.telefonoContacto;
    }

    mostrarInformacion() {
        this.mostrarNombre();
        this.mostrarEdad();
        console.log(`Teléfono de Contacto: ${this.telefonoContacto}`);
    }
}

class Directivo extends Empleado {
    constructor(nombre, edad, sueldoBruto, categoria) {
        super(nombre, edad, sueldoBruto);
        this.categoria = categoria;
    }

    categoria() {
        return this.categoria;
    }

    subordinados() {
        console.log(`Subordinados: ${this.subordinados}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Categoría: ${this.categoria}`);
    }
}

let cliente1 = new Cliente('Mauricio', 28, '3125487659');
let empleado1 = new Empleado('Damaris', 25, 58000);
let empresa = new Empresa(cliente1, empleado1);


/* aqui obtendremos informacion sobre sus empleados y clientes que tiene la empresa llamando a los metodos */
empresa.listaClientes();
empresa.listaEmpleados();

