import { Alumno } from "./alumno.js"
import { Profesor } from "./profesor.js";

const carlos = new Alumno({nombre: 'carlos', apellido: 'burugueño', edad: 29, direccion: 'callesitas', promedio: "10", asistencias:0, usuario: 'carlos', nacionalidad: "Peruana"});

const ahiram = new Profesor ({nombre: 'Ahiram', apellido: 'burugueño', edad: 24, direccion: 'callesitas', promedio: "10", asistencias:0, usuario: 'ahiram', materia:["materia 1", "materia 2"]});


console.log(carlos);
carlos.login();
carlos.obtenerPromedio();

console.log(ahiram);
ahiram.login();
