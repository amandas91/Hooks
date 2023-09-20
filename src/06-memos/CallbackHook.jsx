import { useCallback, useState } from "react"
 import { ShowIncrement } from './ShowIncrement'
export const CallbackHook = () =>{

    const [counter, setCounter] = useState(10);

    // const incrementFather = (initalNumber) =>{
    //    setCounter(counter + initalNumber);
    // }

    // const  incrementFather = useCallback( 
    //     (value) => {
    //         setCounter(counter + 1);
    //         console.log(value);
    //     },
    //     []
    // );

    const  incrementFather = useCallback( 
        (value) => {
            setCounter( (c) => c + value );
            //setCounter( 'Hola mundo' );
            //console.log(value);
        },
        [counter]
    );

    return (
        <>
            <h1>{counter}</h1>

            <ShowIncrement increment2={ incrementFather } />
        </>
    )

}