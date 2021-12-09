import React, {useState, useEffect} from 'react'
import ListaContactos from './ListaContactos'

export default function HomeLista() {
    const [contactos, setContactos] = useState([]) // el segundo elemento setcontactos es el que ayeda a actualizar el estado
    useEffect(() => {
        setTimeout(()=> {
            setContactos  ([
                {
                    nombre:"Adrian",
                    telefono: "1111111111"
                },
                {
                    nombre:"Jhon",
                    telefono: "1111111112"
                },
                {
                    nombre:"Belem",
                    telefono: "1111111113"
                },
            ]);
        },2000);
    }, []);
    return (
        <div>
            <ListaContactos lista = {contactos} />
        </div>
    )
}
