import { Persona } from "./persona.js";

export class Profesor extends Persona {
    constructor({
        nombre, 
        apellido,
        edad,
        direccion,
        materia,
        usuario,
        contrasena,
        salario,
        email,
    })
    {
        super({nombre,apellido, edad, direccion, usuario, contrasena, email});
        this.materia    = materia;
        this.salario    = salario;
    }
    // Metodos

}