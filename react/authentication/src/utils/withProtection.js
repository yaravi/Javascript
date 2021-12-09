// Este es un componente que funcionara protegiendo componentes y rutas
// Este archivo se usara como un Higher Order Component para proteger un componente
// HOC es un componente de orden sperior que nos auda a compartir

import React, {useState} from "react";
import { Redirect } from "react-router-dom";

export default function withProtection(Component) {
    // Verificamos si tenemos un token, si no lo tenemos no mostramos el componente
    const ProtectedComponent = (props) => {
        const [token] = useState(window.localStorage.getItem('token'));
        return  token ? <Component {...props} /> : <Redirect to="/login" />
    }
    return ProtectedComponent; 
}
