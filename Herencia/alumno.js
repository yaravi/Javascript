import { Persona } from "./persona.js";

export class Alumno extends Persona {
    constructor ({
        nombre,
        apellido,
        edad,
        direccion,
        usuario,
        contrasena,
        email,
        promedio,
        asistencias,
        nacionalidad,
    })
    {
        super({nombre, apellido, edad, direccion, usuario, contrasena, email, nacionalidad});
        this.promedio    = promedio;
        this.asistencias = asistencias;
    }
    // Metodos
    obtenerPromedio(){
        console.log(`el usuario ${this.usuario} tuvo un promedio de: ${this.promedio}`);
    }
}