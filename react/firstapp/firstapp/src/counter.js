import React from "react";
import './counter.css';

// Declaramos nuestra clase que sera el nombre del componente
// Utilizar CamelCase para nombrar las clases
// Todos nuestros componentes deben heredar de React.Component
export default class Counter extends React.Component {
    constructor (props) {
        super(props); // super: manda llamar el constructor de la clase padre, que en este caso es React.Component
        this.state = {
            count: props.initCount // initcount se recibe por parametro y es el valor inicial del contador. 
        }
        // El state se va a encargar de modificar el DOM
    }
    // Todos los componentes deen tener un metodo RENDER
    render () {
        // Esta funcion va a retornar codigo JSX
        return (
            <div className="counter-main">
                    <h5>{this.state.count}</h5>
                    <div className="counter-buttons">
                        <button onClick={ () => { this.setState({count:this.state.count + 1}) } }>Agregar</button>
                        <button onClick={ () => { this.setState({count:this.state.count - 1}) } }>Disminuir</button>
                    </div>
            </div>
        );
    }
}
