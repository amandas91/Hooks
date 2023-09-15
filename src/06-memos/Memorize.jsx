import { useState } from 'react';
import { useCounter } from '../hooks'
export const Memorize= () =>{
    const {counter , suma } = useCounter (10);
    const [show, setShow] = useState(true);
    
    return (
        <>
            <h1>Memo</h1>

            <h2>Counter: {counter}</h2>
            <button  className="btn btn-primary"
            onClick={() => suma()}>
                + 1
            </button>
            <button 
            className="btn btn-primary"
            onClick={() => setShow(!show)}> Show</button>
        </>
    )
}