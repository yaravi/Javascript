var computadoraSeleccion;

/* Computadora selecciona una opcion (piedra, papel o tijera) */
var compselect = Math.floor(Math.random() * 3);
if (compselect === 0) {
    computadoraSeleccion = "piedra";
}
else if (compselect === 1) {
    computadoraSeleccion = "papel";
}
else if (compselect === 2) {
    computadoraSeleccion = "tijera";
}


/* Humano selecciona una opcion */
var humSelect = prompt("Cual es tu elección? (piedra, papel o tijera").toLocaleLowerCase();


/* Imprimir en consola las opciones */
console.log("La computadora seleccionó: " + computadoraSeleccion);
console.log("Tu opción seleccionada es: " + humSelect);
document.write("La computadora seleccionó: " + computadoraSeleccion);
document.write("<br>Tu opción seleccionada es: " + humSelect);

/* Validaciones */
if (computadoraSeleccion === "piedra" && humSelect === "piedra" || computadoraSeleccion === "papel" && humSelect === "papel" || computadoraSeleccion === "tijera" && humSelect === "tijera") {
    document.write("<br>Empate");
    console.log("Empate");
}

else if (computadoraSeleccion === "piedra" && humSelect === "papel" || computadoraSeleccion === "papel" && humSelect === "tijera" || computadoraSeleccion === "tijera" && humSelect === "piedra") {
    document.write("<br>Humano Gana");
    console.log("Humano gana");
}

else if (computadoraSeleccion === "piedra" && humSelect === "tijera" || computadoraSeleccion === "papel" && humSelect === "piedra" || computadoraSeleccion === "tijera" && humSelect === "papel") {
    document.write("<br>Computadora Gana");
    console.log("computadora gana");
}
