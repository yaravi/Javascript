export class Persona {
    constructor ({
        nombre,
        apellido,
        edad,
        direccion,
        usuario,
        contrasena,
        email,
        nacionalidad = "Mexicana"
    })
    {
        this.nombre         = nombre;
        this.apellido       = apellido;
        this.edad           = edad;
        this.direccion      = direccion;
        this.usuario        = usuario;
        this.contrasena     = contrasena;
        this.email          = email;
        this.nacionalidad   = nacionalidad;
    }
    // Métodos
    login(){
        console.log(`el usuario ${this.usuario} inició sessión`);
    }
}