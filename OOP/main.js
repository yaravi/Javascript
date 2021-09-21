// EJEMPLO DE LA CLASE

class Persona  {
    constructor (nombre, apellido, edad, sexo, peso, nacionalidad="peruana", esVegano) {
        this._nombre = nombre;
        this._apellido = apellido; 
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._nacionalidad = nacionalidad; 
        this._esVegano = esVegano;
    }
    comer(){
        if(this._esVegano == true){
            return "Esta persona no puede comer alimentos de orgien animal";
        }
        else {
            return "Esta persona puede comer de todo";
        }
    }
    tomarAlcohol(){
        if(this._edad >= 18){
            return "puedes tomar alcohol";
        }
        else {
            return "no puedes tomar alcohol";
        }
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
}

const persona1 = new Persona("Luis", "Juarez", 24, "masculino", 60, "mexicano", false);
const persona2 = new Persona("Juliana", "Lopez", 23, "femenino", 30, "",true);
const persona3 = new Persona({apellido: "Cruz", sexo: "femenino", edad: 22, nombre: "Ahiram", peso: 50});

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(persona1._nombre, persona1.comer());
console.log(persona2._nombre, persona2.comer());
console.log(persona1._nombre, persona1.tomarAlcohol());
console.log(persona2._nombre, persona2.tomarAlcohol());

persona1.setNombre = "hola";
console.log(persona1.getNombre);

// EJERCICIO 1
class Alumnos {
    constructor ({nombre,apellido,califFinal,inscrito}) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._califFinal = califFinal;
        this._inscrito = inscrito;
        this.calificaciones = [];
    }
    obtenerInicialesDeAlumno(){
        return this._nombre[0] + this._apellido[0];
    }
    obtenerNombreCompleto(){
        return this._nombre + this._apellido;
    }
    aprobado (){
        if (this._califFinal >= 6.0){
            return "Felicidades, aprobaste";
        }
        else {
            return "Reprobaste";
        }
    }
    agregarCalificacion(materia, promedio) {
        this.calificaciones.push({
        materia, promedio
        });
        
        return 'Calificacion agregada';
    }  
    obtenerPromedio() {
        let calificacionFinal = 0;
        
        this.calificaciones.forEach(item => {
        calificacionFinal += item.promedio
        })
        
        return `El promedio total es ${Math.round(calificacionFinal / this.calificaciones.length)}`;
    }
    obtenerCalificaciones() {
        this.calificaciones.forEach(item => {
        console.log(`${item.materia}: ${item.promedio}`)
        })
    }
}

const persona1a = new Alumnos({nombre: "Juan", apellido:"Perez", califFinal: 6.0, inscrito: true});
const persona2a = new Alumnos({nombre: "Pedro", apellido:"Lopez", califFinal: 5.9, inscrito: true});


//Obtener iniciales de los alumnos
console.log(persona1a.obtenerInicialesDeAlumno());
console.log(persona2a.obtenerInicialesDeAlumno());

// Obtener el nombre completo de los alumnos
console.log(persona1a.obtenerNombreCompleto());
console.log(persona2a.obtenerNombreCompleto());

// Obtener si se aprobo o no
console.log(persona1a.aprobado());
console.log(persona2a.aprobado());

// Meter materias y calificaciones
console.log(persona1a.agregarCalificacion('matematicas', 8));
console.log(persona1a.agregarCalificacion('historia', 7));
console.log(persona1a.agregarCalificacion('letras', 2));

//Obtener promedio
console.log(persona1a.obtenerPromedio());
console.log(persona1a.obtenerCalificaciones());