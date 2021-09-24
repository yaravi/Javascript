// Crear clase Nodo

class Node {
    constructor(data) {
      this.data = data; //Lo que vamos a guardar
      this.next = null; //Nos va a indicar el nodo siguiente
    }
}
  // Clase de Lista
  // Métodos:
  // -agregar un nodo (al inicio y al final)
  // -eliminar un nodo,
  // -buscar un nodo
  // -recorrer la lista
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    //Agregar un nodo al inicio
    addNodeStart(data) {
        const node = new Node(data); // Creamos el nuevo nodo con la data
        if (this.head === null) {
            // ¿nuestra cabeza está vacia? Si si entonces...
            this.head = node;
        } else {
            //Cuando NO es el primer nodo agregado
            node.next = this.head; //este nuevo nodo apunta a la cabeza
            this.head = node; // cabeza ahora es este nodo
        }
    this.length++;
    }
    //Agregar nodo al final
    addNodeEnd(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
        } 
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
            currentNode.next = node;
        }
        this.length++;
    }
    //Agregar nodo en una posicion en específico
    addNodeByIndex(data, index) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } 
        else {
            let counter = 0;
            let currentNode = this.head;
            let auxNode = null;
            while (counter !== index) {
                counter++;
                auxNode = currentNode;
                currentNode = currentNode.next;
            }
            auxNode.next = node;
            node.next = currentNode;
        }
    }
    //Eliminar un nodo por su dato
    delete(data) {
        let currentNode = this.head;
        let auxNode = null; //nos ayuda a almacenar el nodo a reconectar
        if (currentNode.data === data) {
            this.head = currentNode.next;
        } else {
        while (currentNode.data !== data && currentNode.next !== null) {
            auxNode = currentNode; // guardar el nodoActual por si se ocupa
            currentNode = currentNode.next;
        } //auxNode= Arnold ; currentNode = Adrian
        auxNode.next = currentNode.next; //Adrian
    }
    }
    //Obtener un nodo por su index
    getNode(index) {
      //getIndex(2)
        if (this.head === null || index > this.length) {
            return null;
        } else {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    }
    //Imprimir la lista
    print() {
        let currentNode = this.head;
        while (currentNode !== null) {
        console.log(currentNode); //40 , 20
        currentNode = currentNode.next;
    }
    }
    addNodeEndByData (data) {
        let currentNode = this.head;
        let agregarNode = true;
        while (currentNode.next != null) {
            if (currentNode.data != data) {
                currentNode = currentNode.next;
            }
            else {
                console.log("No se puede insertar un dato repetido");
                agregarNode = false;
                break;
            }
        }
        if (agregarNode) {
            let tmpNodo = new Node(data);
            currentNode.next = tmpNodo;
        }
    }
}

/*
// PROBAR LOS METODOS Y FUNCIONES
const listaDePersonas = new LinkedList();
listaDePersonas.addNodeStart("Arnold");
listaDePersonas.addNodeStart("Merly");
listaDePersonas.addNodeStart("Ahiram");
listaDePersonas.print();
listaDePersonas.addNodeByIndex("Carlos", 3);
console.log(listaDePersonas.getNode(2));
listaDePersonas.addNodeStart("Adrian");
*/

/*
EJERCICIO 1
Implemente un procedimiento que inserte un dato de modo similar al insertar,
al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos,
si un dato ya esta almacenado entonces la lista no cambia
*/

let linkedList = new LinkedList();
linkedList.addNodeStart("Ahiram");
linkedList.addNodeStart("Martin");
linkedList.addNodeStart("Luis");
linkedList.addNodeStart("Paola");
linkedList.addNodeStart("Arnold");
linkedList.print();

console.log("Agregando a Paola")
linkedList.addNodeEndByData("Paola");
linkedList.print();

console.log("Agregando a Carlos")
linkedList.addNodeEndByData("Carlos");
linkedList.print();
