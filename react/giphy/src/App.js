// import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios'

import ImageCard from './Components/ImageCard';
import SearchBar from './Components/SearchBar';

class App extends React.Component {

	state = {  // Se asigna el state directamente sin el constructor porque no vas a manejar estado. 
		results:[] // Aqui se guarda los resultados y se inicializa vacio. 
	}

	search = (searchWord) => {
		const apiKEY = 'mHhQmefhgI1VeDtt9da6LHz5P0pOTmvq';
		axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${searchWord}`)
		.then (( response )=>{
			console.log(response.data);
			console.log(response.data.data);
			this.setState({results:response.data.data})
		})
		.catch ((err) => console.log(err))
	}

	render () {
		return (
			<div className="App">
				<SearchBar emitSearch={ this.search } /> 
				{
					this.state.results.map((item,index) => <ImageCard key={index} url={item.images.fixed_height.url} />) 
				// index en la linea 31 es para que cada una de las imagenes renderizadas tenga un ID unico
				}
			</div>
		);
	}
}

export default App;

// emitSearch agarra la informacion proveniente del boton de busqueda y la envia a la funcion this.search