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
