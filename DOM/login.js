console.log("Hello World!!")

var usuarios = [
    {
        name: "carlos",
        user: "carlos@gmail.com",
        pass: "contrasena123"
    },
    {
        name: "juan",
        user: "juan@gmail.com",
        pass: "contrasena123"
    },
    {
        name: "pedro",
        user: "pedro@gmail.com",
        pass: "contrasena123"
    }
];

function login (correo, password) {
    let alert = document.getElementById("liveAlert");
    let flagAlert = true;
    for (let i = 0; i < usuarios.length; i++) {
        let tmpUsuario = usuarios[i]; // es un objeto que se le pasa las propiedades del arreglo.
        
        if( correo.toLowerCase() === tmpUsuario.user.toLowerCase() && ( password === tmpUsuario.pass ) ) {
            let alert = document.getElementById("liveAlert");
            alert.classList.add("alert-primary");
            alert.innerText="Login exitoso!!!";
            flagAlert = false;
            break;
        }
    }
    if (flagAlert == true){
        let alert = document.getElementById("liveAlert");
        alert.classList.add("alert-danger");
        alert.innerText="Revisa usuario y contraseña"
    }
    setTimeout( function(){cleanMessages()}, 3000);
}

function cleanMessages () {
    let alert = document.getElementById("liveAlert");
    alert.classList.remove("alert-danger", "alert-primary");
    alert.innerText="";
}


let btnlogin = document.getElementById("btn-login");

btnlogin.addEventListener("click", function() {
    let = usuario = document.getElementById("txt-user").value;
    let = password = document.getElementById("txt-pass").value;
    console.log(usuario,password);
    login(usuario,password)
});