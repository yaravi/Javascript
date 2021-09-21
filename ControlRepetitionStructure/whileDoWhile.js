// EJERCICIOS

// * Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
// * Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
// * Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

var arreglo = [];
var entrada ;

do{
    entrada = parseInt(prompt("ingresa un numero"));
    if( typeof(entrada) == "number" )
    {
        arreglo.push(entrada);
    }
} while(entrada != 0)

console.log( "Los numeros ingresados son", arreglo);


// * Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

var arreglo = [];

do{
    var userInput = prompt("Ingresa una letra o palabra");
    arreglo.push(userInput);

}while( userInput != "" )

var index = 0;
var stringFinal = "";

while( index < arreglo.length )
{
    stringFinal = stringFinal + " "+ arreglo[index];
    index++;
    //stringFinal += arreglo[index];
}

document.write(stringFinal);


// * Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

Var userInput = "";
var contador = "";

do {
	userInput = prompt ("Ingresa un dia de la semana").toLowerCase();
	var mensaje= "";	

	if (userInput == "lunes") {
		mensaje= "El dia de hoy es Lunes";
        veces++;
	}
	else if (userInput == "martes") {
		mensaje= "El dia de hoy es Martes";
	}
	else if (userInput == "miércoles") {
		mensaje= "El dia de hoy es Miercoles";
	}
	else if (userInput == "jueves") {
		mensaje= "El dia de hoy es Jueves";
	}
	else if (userInput == "viernes") {
		mensaje= "El dia de hoy es Viernes";
	}
	else if (userInput == "sabado") {
		mensaje= "El dia de hoy es Sabado";
	}
	else if (userInput == "domingo") {
		mensaje= "VE A DESCANSAR";
	}
	else {
	mensaje = "Opción inválida";
	}
	alert(mensaje);
}
while (userInput != "domingo");




// ---------------------------------------------------------------------------------------------------------------------

// FOR, ACUMULADORES Y CONTADORES


// EJERCICIO 1
// Crea un programa que imprima en consola los números impares del 1 al 50.

var contador = 0;
for (var index = 0; index < 50; index++) {
    if (index%2 != 0) {
        contador = contador +1;
        console.log(`${index} es numero impar`);
    }
    
}
console.log(`de 0 a 50 existen ${contador} numero impares`)



// EJERCICIO 2
// Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, 
//mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
// ParseInt cambia de char a numero en el prompt, por defaul todo prompt es char

var numeroInput = parseInt( prompt("escribe un numero del 1 al 150"));

for (var index = 0; index < numeroInput; index++) {
    if (!(index%5)) {
        console.log (`Pokemon numero ${index}: ${pokemons[index]}`);
    }   
    
}


// EJERCICIO 3
// Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

var arreglo = [4,'dos',8,'tres',5,9,1,'cero'];

for (var index = 0; index < arreglo.length; index++) {
    // if (!isNAN(arreglo[index]/1)) {
    if (typeof arreglo[index] == 'number') {
        console.log(`${arreglo[index]} es numero`);
    }
}


// EJERCICIO FIBONACCI
/*
imprimir en consola los numeros entre 0 y 10000 de la secuencia de fibonacci,
Se trata de una secuencia infinita de números naturales  a partir del 0 y el 1, se van sumando a pares, 
de manera que cada número es igual a la suma de sus dos anteriores:
en consola esta seria la salida esperada: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

var numero1 = 0;
var numero2 = 1;
var limite = 10000;

console.log(numero1);
console.log(numero2);
console.log(numero2);
for (numero1 = 1; numero1 <= limite;) {
    
    var suma = numero1 + numero2;
    console.log(suma); 
    numero1 = numero2;
    numero2 = suma;        
    if (suma > 10000) {
        break;
    }
}

// -----------------------------------------------

var limit = parseInt(prompt('Ingrese un número'));
var fb = [];
​
for(var i = 0; i <= limit; i++){
    if (i == 0) fb.push(0);
    else if (i == 1) fb.push(1);
    else fb.push(fb[i-1] + fb[i-2]);
}
​
console.log(fb);

// -----------------------------------------------
var fibonacci = prompt("Ingresa la cantidad de numeros de la serie de Fibonacci que deseas ver:");
var i = 0;
var j = 1;
for (var index = 0; index < fibonacci;index++ ){
    var tempo = i;
    i=j;
    j = tempo+j;
    console.log(i)
}
// -----------------------------------------------
// Con arrays

var fib = [0,1];
var limite = parseInt(prompt("escribe el limite de numeros"));

for (var i = 1; fib[i] <limite; i++) {
    var suma = fib[i-1] + fib[i];
    if (suma < limite){
    fib.push(suma);
    }
}
console.log(fib);













