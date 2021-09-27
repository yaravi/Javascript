// BUSQUEDA LINEAL

function busquedaLineal (arreglo, datoBuscado) {
    for (let i = 0; i < arreglo.length; i++) {
        const element = arreglo[i];
        if (element === datoBuscado) {
            return element;
        }
    }
    return false;
}


const arreglo1 = [5,345,74,56,53,33,645,45456,3435,22,2,45]

console.log(busquedaLineal(arreglo1, 2));
console.log(busquedaLineal(arreglo1, 20));

const arreglo2 = ["fgsfgsdfg", "kjfgakfjg", "afgsfgsfgh", "asfgsdgsdfg"]

console.log(busquedaLineal(arreglo2, "afgsfgsfgh"));
console.log(busquedaLineal(arreglo2, "sdsasbbd"));



// BUSQUEDA BINARIA
function busquedaBinaria(arreglo, datoBuscado) {
    var minimo = 0;
    var maximo = arreglo.length;
    var mitad = 0;

    while (minimo <= maximo) {
        mitad = Math.floor((maximo+minimo)/2); // Posicion a la mitad del arreglo
        console.log("Mitad - posicion en el arreglo", mitad);
        if(arreglo[mitad] === datoBuscado) {
            return arreglo[mitad]
        }
        else {
            if (datoBuscado > arreglo[mitad]) {
                // El elemento esta despues de la mitad
                minimo = mitad + 1;
            }
            else {
                // El elemento es menor de la mitad
                maximo = mitad - 1;
            }
        }
    }
}

const arreglo3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(busquedaLineal(arreglo3, 18));

//------------------------------