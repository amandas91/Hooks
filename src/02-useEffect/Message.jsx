import { useEffect } from "react"

export const Message = ()=>{
    useEffect(() =>{
        // window.addEventListener('mousemove', (event) =>{
        //     console.log(event);
        // })
        console.log('Mensaje montado');
        return () =>{
             console.log('Mensaje desmontado');

        }
     }, []);

    return (
        <>
        <h3>Usuario ya existe</h3>
    
        </>
    )
}