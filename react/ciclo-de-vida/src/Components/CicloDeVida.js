import React from 'react';
import Contador from './Contador';

export default class CicloDeVida extends React.Component {
    constructor (props) {
        super (props);
        console.log("console log desde el constructor");
        this.state = {
            contador: 0,
            mostrarContador: true,
            intervalo: null
        }
    }
    componentWillMount () {
        // Ya no se usa este componente
        console.log("1 - Se ejecuta antes del renderizado del DOM");
    }
    componentDidMount () {
        console.log("3 - despues de que se renderize");
    }
    componentDidUpdate (prevProps, prevState) {
        console.log("El estado se actualizo")
        console.log(prevState); // Imprrime el estado previo del contador
        console.log(this.state); // Imprime el estado actual del contador
    }
    iniciarContador = () => {
        setInterval (()=> {
            this.setState({contador: this.state.contador + 1})
        },1000)
    }
    detenerContador = () => {
        this.stateState({mostrarContador: false})
    }
    render () {
        console.log("2 - cuando el componente se dibuja en el DOM")
        return (
            <div>
                <h1> Ciclo de vida {this.props.nombre} </h1>
                {this.state.mostrarContador ? (
                <Contador contador={this.state.contador} />
                ) : null}
                <button onClick={this.iniciarContador}> Iniciar contador</button>
                <button onClick={()=>this.setState({mostrarContador: false})}> Parar contador</button>
            </div>
        );
    }
}