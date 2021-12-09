import React, {useState, useContext, useEffect} from "react";
import axios from 'axios';

const UserContext = React.createContext ();
// El user context necesita del proveedor y del usuarios

function UserProvider (props) {
    const [usuarioActual, setUsuarioActual] = useState ()
    const token = window.localStorage.getItem('token')

    useEffect(() => {
        if (token){
            const config = {
                headers: {
                    Authorization: `JWT ${token}`,
                }
            }
            axios
            .get("https://ecomerce-master.herokuapp.com/api/v1/user/me", config)
            .then ((response) => {
                if (response.status === 200){
                    setUsuarioActual(response.data);
                }
            });
        }
    }, [token])

    //
    const value = {
        usuarioActual,
        setUsuarioActual
    }
    return <UserContext.Provider value={value} {...props} />;
}

const useUserContext = () => {
    const context = useContext(UserContext)
    return context;
}

//exportar as dos cosas que se van a usar userProvider y useUserContext
export {UserProvider, useUserContext};