const animal = {
    nombre : "firulais",
    edad : 5,
    apellido : "Blanco",
}

function nombreAnimal (objeto) {
    console.log(objeto.nombre);
}

nombreAnimal(animal);

// Destructurado

function nombreDestructurado ({ nombre }) {
    console.log(nonbre);
}

nombreDestructurado (animal);