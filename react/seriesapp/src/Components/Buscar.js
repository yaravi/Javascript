import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function Clima() {
    const [datosApi, setDatosApi] = useState ({}); // se inicializa con {} por ser JSON y se pone asi porque es un objeto
    const [valorInput, setValorInput] = useState (""); // Se utiliza comillas para ingresar el valor inicial y es un string por lo tanto va en comillas
    const [ciudad, setCiudad] = useState ("outlander"); // Se utiliza esta constante para definir la ciudad que se desea buscar
    const q = ciudad;
    // Se importa el API KEY desde el .env creado que sirve para mantener la informacion privada.
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    const units = "metric";
    console.log(apiKey);
    const url = `https://api.tvmaze.com/search/shows?q=${q}`;

    //-----------------------------------
    // Se ejecuta solo al inicio, solo en el primer render
    useEffect(() => {
        axios.get(url).then((res)=> console.log(res.data) + setDatosApi(res.data));
    }, [url])
    // ----------------------------------
    // funcion para actualizar el estado del event donde la persona busca una ciudad
    const inputHandler = (event) => {
        setValorInput(event.target.value); // Actualizando el valorInput
        console.log(valorInput);
    }
    //-----------------------------------
    // Esta funcion se utiliza para cambiar el valor ciudad en la URL
    const submitHandler = () => {
        setCiudad (valorInput)
    }
    // --------------------------------
    return (
        <div className="container">
            <h1>Buscador de Series</h1>
            <div className="div__datos">
                <input type="text" placeholder="Ingresa tu serie que quieres buscar" onChange={inputHandler} value={valorInput} />
                <button onClick={submitHandler}>SEARCH</button>
            </div>
            {datosApi.main ? 
            <h2> 
            {datosApi.name}, {datosApi.show.id}
            </h2> 
            : <h2>Loading...</h2>}
        </div>
    )
}
