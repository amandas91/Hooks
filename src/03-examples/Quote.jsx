import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({title, image}) =>{

    /**
     * Estos Hooks se crean en el apartado 5
     */
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width:0, height:0});

    useLayoutEffect( () =>{
        const { width, height} = pRef.current.getBoundingClientRect();
        console.log(pRef.current.getBoundingClientRect());
        setBoxSize({width, height});
    }, [image] )

    return (
        <>
        
            <div className='card'>
                <div className='card-text'>
                    <p>{title}</p>
                </div>
                <img className='card-img-top' src={image} ref={pRef} id='idref'/>
            </div>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}