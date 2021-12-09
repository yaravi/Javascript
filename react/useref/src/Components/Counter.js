import React,{useState, useEffect, useRef} from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    const botonContadorRef = useRef();
    const cuentaRenderizado = useRef (0);
    const nombre = useRef('carlos');

    useEffect(() => {
        console.log(botonContadorRef.current.innerText = 'Hello!');
        if(cuentaRenderizado.current === 0){
            cuentaRenderizado.current = cuentaRenderizado.current + 1;
        }
        console.log(`El valor inicial del contador es: ${count}`)
        console.log(cuentaRenderizado.current);
    },[count] )

    const changeName = ()=>{
        nombre.current = 'Ahiram';
        console.log(`El valor de name es: ${nombre.current}`)
    }

    return (
        <div>
            <h1> COUNTER : {count} </h1>
            <button ref={botonContadorRef} onClick={()=> {setCount(count+1)}}>Add 1</button>
            <button onClick={()=> {setCount(count-1)}}>Rest 1</button>
            <h1>Nombre: {nombre.current} </h1>
            <button onClick={changeName}>Cambiar nombre</button>
        </div>
    )
}
