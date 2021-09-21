var semaforo = prompt("de que color esta el semaforo?").toLowerCase();


if (semaforo == "verde") {
    console.log("avanza")
}
else if (semaforo == "amarillo") {
    console.log("reduce velocidad")
}
else if (semaforo == "rojo") {
    console.log("Para")
}
else
    console.log("no exite ese color, necesitas lentes hah")



