import { useRef } from 'react'
export const FocusScreen = () =>{

    const inputRef = useRef();

    const onClick = () =>{
        console.log(inputRef);
        //document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus UseRef</h1>

            <input ref={inputRef}
            type="text" placeholder="Ingrese nombre"
            className="form-control"/>

            <button onClick={onClick} className="btn btn-primary mt-2">
                Set Focus
            </button>
        </>
    )
}