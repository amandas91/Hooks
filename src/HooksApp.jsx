import { useState } from "react"

export const HooksApp = () =>{

    const [counter, setCounter] = useState({
        contador1:10,
        contador2:20,
        contador3:30
    });

    const {contador1, contador2, contador3 } = counter;

    return (
        <>
            <h1>Hooks {contador1}</h1>
            <h1>Hooks {contador2}</h1>
            <h1>Hooks {contador3}</h1>


            <button onClick={()=>{
                setCounter({
                    ...counter,
                    contador1: contador1 + 1
                }) // counter 11
            }}>+ 1</button>
            <button>
                Reset 
            </button>
            <button onClick={()=>{
                setCounter({
                    ...counter,
                    contador1: contador1 - 1
                }) // counter 11
            }}> - 1</button>
        </>
    )
}