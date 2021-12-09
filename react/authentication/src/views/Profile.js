import React from 'react'
import withProtection from '../utils/withProtection'
import { useUserContext } from '../Context/userContext'



const Profile = () => {
    const context = useUserContext(); // Este contexto trae el usuario actual de userContext.js
    return (
        <div>
            <h1>Profile</h1>
            {context.usuarioActual ? (
                <>
                    <p><b>Nombre:</b> {context.usuarioActual.user.first_name}</p>
                    <p><b>Apellido:</b> {context.usuarioActual.user.last_name}</p>
                    <p><b>Fecha de nacimiento:</b> {context.usuarioActual.user.birth_date}</p>
                    <p><b>E-Mail:</b> {context.usuarioActual.user.email}</p>
                </>
            ) : (
                <p>No puedes acceder a esta info</p>
            )}
        </div>
    )
}

export default withProtection(Profile);