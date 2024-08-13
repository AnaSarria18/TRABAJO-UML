
class EmpleadoSanitario {
    constructor(numeroEmpleado, nombre, tipo) {
      this.numeroEmpleado = numeroEmpleado;
      this.nombre = nombre;
      this.tipo = tipo;
    }
  }
  
 
  class Medico extends EmpleadoSanitario {
    constructor(numeroEmpleado, nombre, especialidad) {
      super(numeroEmpleado, nombre, 'Medico');
      this.especialidad = especialidad;
    }
  }
  
  class Enfermero extends EmpleadoSanitario {
    constructor(numeroEmpleado, nombre) {
      super(numeroEmpleado, nombre, 'Enfermero');
    }
  }
  

  class Paciente {
    constructor(numeroHistoriaClinica, nombre, direccion) {
      this.numeroHistoriaClinica = numeroHistoriaClinica;
      this.nombre = nombre;
      this.direccion = direccion;
      this.medicos = [];
      this.enfermeros = [];
      this.analisis = [];
    }
  
    agregarMedico(medico) {
      this.medicos.push(medico);
    }
  
    agregarEnfermero(enfermero) {
      this.enfermeros.push(enfermero);
    }
  
    agregarAnalisis(analisis) {
      this.analisis.push(analisis);
    }

    mostrarInformacion() {
        let informacionPaciente = `Número de Historia Clínica: ${this.numeroHistoriaClinica}`;
        informacionPaciente += `Nombre: ${this.nombre}`;
        informacionPaciente += `Dirección: ${this.direccion}`;
    
        if (this.medicos.length > 0) {
          informacionPaciente += `Médicos:`;
          for (let i = 0; i < this.medicos.length; i++) {
            let medico = this.medicos[i];
            informacionPaciente += `Número de Empleado: ${medico.numeroEmpleado}, Nombre: ${medico.nombre}, Especialidad: ${medico.especialidad}`;
          }
        }
    
        if (this.enfermeros.length > 0) {
          informacionPaciente += `Enfermeros`;
          for (let i = 0; i < this.enfermeros.length; i++) {
            let enfermero = this.enfermeros[i];
            informacionPaciente += `Número de Empleado: ${enfermero.numeroEmpleado}, Nombre: ${enfermero.nombre}\n`;
          }
        }
    
        if (this.analisis.length > 0) {
          informacionPaciente += `Análisis:`;
          for (let i = 0; i < this.analisis.length; i++) {
            let analisis = this.analisis[i];
            informacionPaciente += `Número de Referencia: ${analisis.numeroReferencia}, Tipo: ${analisis.tipo}, Fecha: ${analisis.fecha}`;
            informacionPaciente += `  Médico Solicitante: ${analisis.medicoSolicitante.nombre}`;
            informacionPaciente += `  Enfermeros Realizadores:`;
            for (let k = 0; k < analisis.enfermerosRealizadores.length; k++) {
              let enfermero = analisis.enfermerosRealizadores[k];
              informacionPaciente += `    - ${enfermero.nombre}`;
            }
            informacionPaciente += `  Resultados: ${analisis.resultados}`;
          }
        }
    
        return informacionPaciente;
      }
    }
  
  class Analisis {
    constructor(numeroReferencia, tipo, fecha, medicoSolicitante, enfermerosRealizadores, resultados) {
      this.numeroReferencia = numeroReferencia;
      this.tipo = tipo;
      this.fecha = fecha;
      this.medicoSolicitante = medicoSolicitante;
      this.enfermerosRealizadores = enfermerosRealizadores;
      this.resultados = resultados;
    }
  }
  
 
const medico1 = new Medico(5, 'Salome Arce', 'Radioologa');
const enfermero1 = new Enfermero(1, 'Andres Uribe');

const analisis1 = new Analisis(115, 'Radiografia', '2024-07-15', medico1, [enfermero1], 'los resultados estan en orden');

const paciente1 = new Paciente(12345, 'Sofia Rios', 'avenida 11');

paciente1.agregarMedico(medico1);
paciente1.agregarEnfermero(enfermero1);
paciente1.agregarAnalisis(analisis1);


console.log(paciente1.mostrarInformacion());


 