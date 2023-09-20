import { useState } from 'react';
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize= () =>{
    const {counter , suma } = useCounter (10);
    const [show, setShow] = useState(true);
    console.log('Padre');
    return (
        <>
            <h1>Counter: <Small value={counter}/> </h1>
            
            {/* <h2>Counter: {counter}</h2> */}
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