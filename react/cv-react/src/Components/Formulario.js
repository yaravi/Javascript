import React from 'react';
import './Formulario.css';

export default class Formulario extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            valorFormulario: ""
        }
    }

    render() {
        return(
            <div>
            <input type="text" placeholder="placeholder" onKeyUp={ async (e)=>{
                console.log(e);
                    console.log("estado actual", this.state.valorFormulario);
                    await this.setState({valorFormulario:e.target.value})
                    console.log("Nuevo estado a", this.state.valorFormulario);
                }}></input>
            <span>{ this.state.valorFormulario }</span>
            </div>
        );
    }
}