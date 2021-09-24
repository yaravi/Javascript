// clase nodo para relacionar nuestro arbol

class Node {
    constructor (data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Clase arbol

class Tree {
    constructor () {
        this.root = null;  // Root es el elemento raiz del arbol, es el padre de todo el arbol
    }
    // METODOS
    add (data) {
        //Validar si existe o no el nodo raiz
        if (this.root === null) {
            this.root = new Node(data,null,null);
            return;
        }
        // Entra al nodo else cuando root no va a ser nulo
        let currentNode = this.root;
        while (true) {
            // Se añaden los valores que sean manor a la izquierda
            if(data < currentNode.data) { // Añadir a la izquiera si es mas chico
                currentNode.left = new Node (data, null, null);
                break;
            }
            else {
                //Añadir a la derecha
                currentNode.right = new Node (data, null, null);
                break;
            }
        }
    }
}



let arbol = new Tree();
arbol.add(50);
arbol.add(35);
arbol.add(65);
arbol.add(40);

console.log(arbol);