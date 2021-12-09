import axios from 'axios'
import React from 'react'
import useForm from '../hooks/useForm'
import {useHistory} from "react-router"
import { useUserContext } from '../Context/userContext'

export default function Login() {
    const history = useHistory();
    const context = useUserContext ();

    const login = (datos) => {
        axios
            .post("https://ecomerce-master.herokuapp.com/api/v1/login", datos)
            .then((response) => {
                console.log(response.data);
                window.localStorage.setItem('token',response.data.token) // Local Storage mantiene la sesion abierta por lo largo de la vida del token
                window.sessionStorage.setItem('token',response.data.token) // La diferencia es que la sesion solamente se mantiene mientras la ventana esta abierta, cuando se cierra se tiene que hacer un login de nuevo
                

            // Esta configuracion es para actualizar el context y se necesita ejecutar para poder traer al usuario actual
            const config = {
                headers: {
                    Authorization: `JWT ${response.data.token}`,
                },
            };
                axios
                .get("https://ecomerce-master.herokuapp.com/api/v1/user/me", config)
                .then ((response) => {
                    if (response.status === 200){
                        context.setUsuarioActual(response.data);
                    }
            });
            // --------------------------------------

            history.push('/');
        })
        .catch ((error)=> {
            console.log(error);
        });
    };

    // Al useForm le enviamos la funcion que se va a ejecutar en el submit
    // En este caso es la funcion que hara la peticion para hacer login.
    const {inputs, handleInput, handleSubmit} = useForm(login,{})
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Ingresa tu E-Mail"
                            onChange={handleInput}
                            value={inputs.email}
                        />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Ingresa tu Contraseña"
                            onChange={handleInput}
                            value={inputs.password}
                        />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
