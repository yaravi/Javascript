import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './clima.css'

export default function Clima() {
    const [datosApi, setDatosApi] = useState ({}); // se inicializa con {} por ser JSON y se pone asi porque es un objeto
    const [valorInput, setValorInput] = useState (""); // Se utiliza comillas para ingresar el valor inicial y es un string por lo tanto va en comillas
    const [ciudad, setCiudad] = useState ("chicago"); // Se utiliza esta constante para definir la ciudad que se desea buscar
    const q = ciudad;
    // Se importa el API KEY desde el .env creado que sirve para mantener la informacion privada.
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    const units = "metric";
    console.log(apiKey);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=${units}`;

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
            <h1>Aplicación del Clima</h1>
            <div className="div__datos">
                <input type="text" placeholder="Ingresa tu ciudad" onChange={inputHandler} value={valorInput} />
                <button onClick={submitHandler}>SEARCH</button>
            </div>
            {datosApi.main ? 
            <h2> 
            {datosApi.name}, {datosApi.sys.country}
            <p/>
            {datosApi.weather[0].description}
            <p/>
            <img src={`http://openweathermap.org/img/w/${datosApi.weather[0].icon}.png`} alt={datosApi.weather[0].icon}></img>
            <p/>
            Temperatura: {datosApi.main.temp} {units}
            <p/>
            Humedad: {datosApi.main.humidity}
            <p/>
            Presión: {datosApi.main.pressure}
            </h2> 
            : <h2>Loading...</h2>}
        </div>
    )
}


// {datosApi.main ? <h2> {q} : {datosApi.main.temp} {units}</h2> : <h2>Loading...</h2>}
// aqui arriba se usa para poner un placeholder para que si no hay nada en el estado ponga un loading. 