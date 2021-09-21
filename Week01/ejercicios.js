// EJERCICIO 1
/* Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”. */

var pregunta = prompt("Eres bellisimo/a?").toLowerCase();
if (pregunta == "si") {
    console.log("Ciertamente");
}
else
    console.log("no te creo");


// EJERCICIO 2
//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

var pregunta2 = prompt("Cual numero?").toLowerCase();
var pregunta2a = pregunta2%2

if (pregunta2a == "0") {
    console.log("es divisible entre 2");
}
else
    console.log("es numero impar");

// EJERCICIO 3
// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var pregunta2 = prompt("Cual numero?").toLowerCase();
var pregunta2a = pregunta2%2

if (pregunta2a == "0") {
    alert("Numero Par");
}
else
    alert("Numero impar");

// EJERCICIO 4
// Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

var pregunta4 = prompt("Introduce tu número de cliente");

if (pregunta4 == "1000") {
    console.log("Ganaste un premio");
}
else
    console.log("sigue participando");

// EJERCICIO 5
// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

var pregunta5a = prompt("Introduce el primer número");
var pregunta5b = prompt("Introduce el segundo número");

if (pregunta5a > pregunta5b) {
    console.log("es mmenor: " + pregunta5b)
}
else
    console.log("Es menor: " + pregunta5a)

// EJERCICIO 6
// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

var pregunta6a = prompt("Introduce el primer número");
var pregunta6b = prompt("Introduce el segundo número");
var pregunta6c = prompt("Introduce el tercer número");

if (pregunta6a >= pregunta6b && pregunta6a >= pregunta6c) {
    console.log("es mayor: " + pregunta6a)
}
else if (pregunta6b >= pregunta6a && pregunta6b >= pregunta6c) {
    console.log("es mayor: " + pregunta6b)
}
else if (pregunta6c >= pregunta6a && pregunta6c >= pregunta6b) {
    console.log("Es mayor: " + pregunta6c)
}

// EJERCICIO 7
// Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

var pregunta7 = prompt ("Introduce un día de la semana").toLowerCase();
if (pregunta7 == "lunes") {
    console.log("Felicidades por ser lunes")
}
else if (pregunta7 == "viernes") {
    console.log("Felicidades por ser viernes")
}
else if (pregunta7 == "sabado") {
    console.log("Felicidades por ser sabado")
}
else if (pregunta7 == "domingo") {
    console.log("Felicidades por ser domingo")
}
else console.log("Felicidades por ser otro dia")

// EJERCICIO 8
// Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

var pregunta8 = prompt("Introduzca un numero del 1 al 10");

if (pregunta8 <= 10 && pregunta8 >= 0) {
    if (pregunta8 < 6) {
        console.log("estas reprobado")
    }
    else if (pregunta8 >= 6 && pregunta8 <= 8) {
        console.log ("Regular")
    }
    else if  (pregunta8 == 9) {
        console.log ("Bien")
    }
    else if  (pregunta8 == 10) {
        console.log ("Excelente")
    }
}
else console.log("Numero no esta en el rango")

// EJERCICIO 9
/* 
Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
*/
var pregunta9a = prompt("Quieres comprar un helado").toLowerCase();
var helado=50
var oreo=10;
var kitkat=15;
var brownie=20;

if (pregunta9a == "si") {
    var pregunta9b = prompt("quieres toppings con tu helado?").toLowerCase();
        if (pregunta9b == "si") {
            console.log("Los toppings disponibles son: Oreo, KitKat, Brownie");
            var pregunta9c = prompt("Cual topping quieres?").toLowerCase();
                if (pregunta9c == "oreo") {
                    console.log("El precio de tu helado es de " + helado + "toping oreo: " + oreo + " total: " + (helado+oreo));
                }
                else if (pregunta9c == "kitkat") {
                    console.log("El precio de tu helado es de " + helado + "toping kitkat: " + kitkat + " total: " + (helado+kitkat));
                }
                else if (pregunta9c == "brownie") {
                    console.log("El precio de tu helado es de " + helado + "toping brownie: " + brownie + " total: " + (helado+brownie));
                }

        }
        else console.log("el precio de tu helado es de: " + helado);

}
else console.log("gracias por no comprar nada");

// EJERCICIO 10
/* 
Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses
*/
var course = 4999;
var carrera = 3999;
var master = 2999;
var facebook = 0.2;
var google = 0.1;
var jesua = 0.5;

var pregunta10a = prompt ("Cual programa educativo te inscribes? Master, Course, Carrera").toLowerCase();
var pregunta10b = prompt ("Cual beca educativo con la que te inscribes? facebook, google, jesua").toLowerCase();

if (pregunta10a == "course") {
    if (pregunta10b == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*facebook))/2))
    }
    else if (pregunta10b == "google") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*google))/2))
    }
    else if (pregunta10b == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*jesua))/2))
    }
}



else if (pregunta10a == "carrera") {
    if (pregunta10b == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*facebook))/6))
    }
    else if (pregunta10b == "google") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*google))/6))
    }
    else if (pregunta10b == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*jesua))/6))
    }
}


else if (pregunta10a == "master") {
    if (pregunta10b == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*facebook))/12))
    }
    else if (pregunta10b == "google") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*google))/12))
    }
    else if (pregunta10b == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*jesua))/12))
    }
}


// EJERCICIO 11
/*
Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. 
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
*/
var coche = 0.2;
var moto =  0.1;
var bus = 0.5;
var extra5 = 5;
var extra10 = 10;

var pregunta11a = prompt("Que transporte utilizas? coche, moto o bus").toLowerCase();
var pregunta11b = prompt ("Cuantos kilometros recorriste");

if (pregunta11b >= 0 && pregunta11b <= 100) {
    if (pregunta11a == "coche") {
        console.log ("vas a pagar la cantidad de: " + ((pregunta11b*coche)+extra5) );
    }
    else if (pregunta11a == "moto") {
        console.log ("vas a pagar la cantidad de: " + ((pregunta11b*moto)+extra5) );
    }
    else if (pregunta11a == "bus") {
        console.log ("vas a pagar la cantidad de: " + ((pregunta11b*bus)+extra5) );
    }
}

else if (pregunta11b > 100) {
    if (pregunta11a == "coche") {
        console.log ("vas a pagar la cantidad de: " + ((pregunta11b*coche)+extra10) );
    }
    else if (pregunta11a == "moto") {
        console.log ("vas a pagar la cantidad de: " + ((pregunta11b*moto)+extra10) );
    }
    else if (pregunta11a == "bus") {
        console.log ("vas a pagar la cantidad de: " + ((pregunta11b*bus)+extra10) );
    }
}
else console.log("Cantidad en negativo no aceptada");