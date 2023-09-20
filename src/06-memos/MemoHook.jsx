import { useMemo, useState } from 'react';
import { useCounter } from "../hooks"

const ejemplo = (iterationNumber = 10) =>{
    for( let i=0; i < iterationNumber; i++){
        console.log('iteration' + i);
    }

    return  `Iteraciones  ${iterationNumber}`;
}

export const MemoHook = () =>{

    const {counter , suma } = useCounter(); 
    const [ show, setShow ] = useState(true);

    //const memorizedValue = useMemo( () => ejemplo(counter), [counter] );

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <h2> { ejemplo(500) }</h2>
            {/* <h2>{memorizedValue}</h2> */}

            <button  
            className="btn btn-primary"
            onClick={ () => suma ()}>+1 </button>

            <button  className="btn btn-primary"
            onClick={ () => { setShow ( !show)}}> Show / Hide  {JSON.stringify(show) }</button>
        </>
    )
}