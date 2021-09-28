// ORDERING - BUBBLE SORT
console.log("BUBBLE SORT")

function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Vuelta", i);
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let valorActual = array[j];
                array[j] = array [j+1];
                array [j+1] = valorActual;
            }
            console.log("arreglo ", array);
        }
    }
    return array;
}

const arreglo1 = [10,2,6,1,9,7,3,4];
console.log(bubbleSort(arreglo1));



console.log("INSERTION SORT")

// ORDERING - INSERTION SORT
function insertionSort(array){
    for (let i = 0; i < array.length; i++) {
        let posicion = i;
        let valorActual = array[i];
        while(posicion - 1 >= 0 && valorActual < array[posicion-1]) {
            array[posicion] = array [posicion - 1];
            posicion = posicion - 1;
            console.log("While execution", array);
        }
        array[posicion] = valorActual;
        console.log("array de vueltas", array);
    }
    return array;
}

const arreglo2 = [10,2,6,1,9,7,3,4];
console.log(insertionSort(arreglo2));