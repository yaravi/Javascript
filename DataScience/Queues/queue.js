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
