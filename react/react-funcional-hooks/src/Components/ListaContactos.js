import React from 'react'

export default function ListaContactos({lista}) { // Props recibe una lista de contactos
    const renderizarContactos = () => {
        return lista.map((contacto) => (
            <p key={contacto.telefono}>
                {contacto.nombre} - {contacto.telefono}
            </p>
        ));
    };

    return (
        <div>
            <h1>Esta es la lista de contactos</h1>
            {renderizarContactos()}
        </div>
    )
}
