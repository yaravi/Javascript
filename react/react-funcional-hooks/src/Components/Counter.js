import React, { useState, useEffect } from 'react'

function Counter ({apellido, edad}) {
    // Aqui se escribe la logica de la funcion
    // useState nos va a devolver un arreglo con 2 elementos: variable, setVariable
    // Posicion 0: el valor dle estado (variale)
    // Posicion 1: la funcion para actualizar el estado
    // useState() recibe el valor inicial de la variable
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("Ahiram");
    // Utilizando useEffect
    useEffect(() => {
        console.log("Hola desde useEffect"); // Se ejecuta desde que ya se hizo el renderizado
        // Se va a ejecutar el console log cada vez que haya una actualizacion, por ejemplo haciendo clik a los botones
    },) // Siempre se va a ejecutar cuando haya un cambio de estado
    useEffect(() => {
        console.log("hola solo iniciio")
    }, []) // este useEffect ya no se va a ejecutar cuando se actualize el estado porque los corchetes no estan escuchando nada que lo actualize
    useEffect(() => {
        console.log("hola solo deesde que se ejecuta contador")
    }, [contador]) // Se ejecuta cuando el estado de contador cambie, o sea, cada vez que se hace click en el boton.
    useEffect(() => {
        console.log("hola se ejecuta solamente cuando nombre cambia")
    }, [nombre]) // solamnte se ejecuta 1 vez porque nadie esta cambiando la variable nombre
    //----------------------------------
    // Donde se va a retornar lo que se vera en la pantalla
    return (
        <div className="counter">
            <h1>Yo soy el componente counter</h1>
            <h2>Hola: {nombre} {apellido} tienes {edad}</h2>
            <p>{contador}</p>
            <button onClick={()=>{setContador (contador + 1)}}>Sumar 1</button>
            <button onClick={()=>{setContador (contador - 1)}}>Restar 1</button>
        </div>
    );
}

export default Counter