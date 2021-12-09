import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            search: "" // La busqueda a realizar, si esta vacia no se ha escrito nada
        }
    }
    render () {
        return (
            <div className="search-bar">
                <input 
                    className="search-input" 
                    placeholder="Que deseas buscar?" 
                    name="search" 
                    onChange={ (event) => this.setState({search:event.target.value}) } // cuando se escriba, vamos a tener en el estado
                    //Event es una funcion que tiene un target y valor (lo que se esta tecleando)
                    // en nuestro estado esta actualizandolo por lo que se esta escribiendo
                />
                <button className="search-button" type="button" onClick={ () => {this.props.emitSearch(this.state.search)} }>Buscar</button> 
            </div>
        );
    }
}

// emitSearch sirve para regresar informacion al componente, por ejemplo del campo de boton al componente SearchBar