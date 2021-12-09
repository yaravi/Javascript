import React from 'react'
import {Switch,BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import Home from '../views/Home'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Item from '../views/Item'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../views/Profile'
import { useUserContext } from '../Context/userContext'

// Este componente remueve el token de login de local storage eliminando el acceso del usuario
const Logout = () => { 
    window.localStorage.removeItem('token');
    window.sessionStorage.removeItem('token'); // Se borra el token de la sesion y del local storage
    const context = useUserContext (); // Actualizamos el estado useUserContext para que el render detecte que ya no hay usuario y bloquee el acceso a las paginas 
    context.setUsuarioActual(); // Actualiza el estado actual a nada
    return <Redirect to="/" />
}

export default function Routes() {
    return (
    <Router>
        <Navbar />
        <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/item" component={Item} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
    </Router>
    )
}
