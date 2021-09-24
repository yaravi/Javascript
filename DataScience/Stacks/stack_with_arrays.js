class Pila {
    constructor(){
        this.pila = [];
    }
    // Agrega un elemento al final de la pila
    push (item) {
        this.pila.push(item);
        return this.pila;
    }
    pop (){
        return this.pila.pop();
    }
    peek (){
        return this.pila[this.pila.lenght - 1];
    }
    size(){
        return this.pila.length;
    }
    print(){
        console.log(this.pila);
    }
}


const pila1 = new Pila();
pila1.push(1);
pila1.push(2);
pila1.push(3);
pila1.push(4);
pila1.push(5);
console.log(pila1);

pila1.pop();
console.log("pop", pila1.pop());
console.log(pila1);
console.log("peek", pila1.peek());
console.log(pila1);

pila1.print();




//////////////////// EJERCICIOS
/*
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/

function mostrarCamino (recorrido) {
    let mostrarCamino = "";
    let auxSize = recorrido.size();
    for (let index = 0; index < recorrido.size(); index++) {
        mostrarCamino += recorrido.peek();
        
        if (index != auxSize -1) {
            mostrarCamino += " -> ";
        }
        recorrido.pop();
    }

    console.log("Regreso: ", mostrarCamino);
}

const recorrido = new Pila (); // Pila que almacena los destinos

// Agregamos la ruta
recorrido.push("Pueblo Origen");
recorrido.push("Pueblo Origen");
recorrido.push("Pueblo 1");
recorrido.push("Pueblo 2");
recorrido.push("Destino");

mostrarCamino(recorrido);

