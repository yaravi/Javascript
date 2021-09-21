// Crear clase nodo
class Node {
    constructor (data) {
        this.data = data; // Lo que vamos a guardar en la variable
        this.next = null; // Nos va a indicar el nodo siguiente
    }
}

// Clase de lista
// Metodos agregar un nodo (al inicio y al final), eliminar un nodo, buscar un nodo y recorrer la lista
class LinkedList {
    constructor () {
        this.head = null;
        this.lenght = 0;
    }
    // Metodos Agregar nodo
    addNodeStart(data) {
        const node = new Node(data); // Creamos el nuevo nodo con la data
        if(this.head === null) {  // Aqui se pregunta si la cabeza esta vacia o no
            this.head = node;
        }
        else { // Cuando no es el primer nodo agregado en la linked list
            node.next = this.head; // Este nuevo nodo apunta a la cabeza
            this.head = node; // Cabeza ahora es este nodo
        }
    }
    print () {
        let currentNode = this.head;
        while (currentNode !== null){
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }
    delete (data) { 
        let currentNode = this.head;
        let auxNode = null; // Nos va a servir para reconectar nodos, almacenandolo temporalmente
        if (currentNode.data === data) {
            this.head = currentNode.next;
        }
        else {
            while (currentNode.data !== data && currentNode !== null) { // El ciclo while es para determinar el nodo antes del que quieres eliminar
                auxNode = currentNode; // Guarda el nodoActual por si se ocupa
                currentNode = currentNode.next;
            }
            auxNode.next = currentNode.next; //auxNode = Arnold ; currentNode = Adrian
        }
    }
}

const listaDePersonas = new LinkedList();
listaDePersonas.addNodeStart("Adrian");
listaDePersonas.addNodeStart("Arnold");
listaDePersonas.addNodeStart("Merly");
console.log(listaDePersonas);
listaDePersonas.print();

listaDePersonas.delete("Arnold");
console.log(listaDePersonas);
