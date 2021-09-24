class colas {
    constructor(){
        this.cola = [];
    }
    enqueue(item) { // Agrega un elemento a la cola
        this.cola.push (item);  // Agrega el elemento al final usando push
        return this.cola;
    }
    dequeue() { // Extrae el primer elemento de la cola y lo borra de este
        return this.cola.shift(); // Retorna el primer elemento y lo borra
    }
    peek() { // Obtiene el primer elemento sin extraerlo
        return this.cola[0]; // El [0] es el primer elemento de la cola
    }
    front () { // Nos retorna el primer elmento de la cola
        return this.cola[0]; // Front funciona igual que peek, nos retorna el principio de la cola
    }
    back () { // Nos retorna el ultimo elemento agregado a la cola
        return this.cola[this.cola.length -1]; // el lenght te da la posicion maxima, el -1 es porque considera posicion 0
    }
    size() { // Retorna el tamaño de la cola
        return this.cola.length; // muestra el tamaño de la cola
    }
    print() { // Muestra el contenido de la cola
        console.log(this.cola);
    }
    isEmpty () {
        if (this.cola.length > 0) 
            return false;
        else 
            return true;
    }
}

const colaAlumnos = new colas (); // creas ima variable para meter a cola()
console.log (colaAlumnos.isEmpty()); // Imprime si la cola esta vacia o no

colaAlumnos.enqueue("Arnold");  // Agregas elementos a la cola
colaAlumnos.enqueue("Luis");
colaAlumnos.enqueue("Fiorella");
colaAlumnos.enqueue("Paola");
colaAlumnos.enqueue("Oliver");

console.log(colaAlumnos.isEmpty()); // Imprime si la cola esta vacia o no, en este caso ya no esta vacia.

colaAlumnos.print();


console.log(colaAlumnos.front());  // Imprime Arnold
console.log(colaAlumnos.back()); // Imprime Oliver por ser el ultimo, NO lo saca de la cola

console.log(colaAlumnos.dequeue());  // Quitaria de la cola a Arnold, imprimiendolo en consola


console.log(colaAlumnos.front()); // Mostraria Luis
console.log(colaAlumnos.back()); // Imprime Oliver por ser el ultimo
colaAlumnos.print(); // Imprime otra vez toda la cola restante despues del dequeue 

// AGREGAS UN NUEVO ELEMENTO A LA COLA
colaAlumnos.enqueue("Ahiram");  // Agregas a Ahiram en la ultima posicion
console.log(colaAlumnos.front());  // Imprime Luis por ser el primero despues de hacerlo dequeue en linea 52
console.log(colaAlumnos.back()); // Imprime Ahiram, ahora por ser la ultima en la fila.
colaAlumnos.print(); // Imprime otra vez toda la cola restante despues del dequeue 


console.log(colaAlumnos.size()); // Imprime el numero de elementos de la cola



/* 
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe hacer “pop” de tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’]
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los siguientes elementos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]

/*



/*
4.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
Colas ejercicios
5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
Cola: [
{ user:‘User1’, ticket:true },
{ user:‘User2’, ticket:true },
{ user:‘User3’, ticket:false },
{ user:‘User4’, ticket:true },
{ user:‘User5’, ticket:false },
{ user:‘User6’, ticket:false },
{ user:‘User7’, ticket:true },
{ user:‘User8’, ticket:true },
{ user:‘User9’, ticket:true },
{ user:‘User10’, ticket:false },
{ user:‘User11’, ticket:true },
];
*/