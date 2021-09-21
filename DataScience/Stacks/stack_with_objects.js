class pila {
    constructor(){
        this.pila = {};
        this.contador = 0;
    }
    push(item){
        this.pila[this.contador] = item;
        this.contador++;
        return this.pila;
    }
    pop () {
        this.contador--;
        const item = this.pila[this.contador];
        delete this.pila[this.contador];
        return item;
    }
}

const pilaObjetors = new Pila();
pilaObjetors.push("Libro 1"); // {0: Libro 1}
pilaObjetors.push("Libro 2"); // {0: Libro 1, 1: Libro 2}
console.log("Push verification", JSON.stringify(pilaObjetors))
console.log("Push verification", pilaObjetors);


console.log(pilaObjetors);
console.log(pilaObjetors.pop());    