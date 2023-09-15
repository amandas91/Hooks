import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from '../03-examples'

export const Layout = () =>{

    //Llamar Counter
    const {counter,suma} = useCounter();
    const {data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/${counter}`);
    // console.log(data.title, data.image);
    const {title, image} = !!data && data;

    return (
        <>
        <h1>Store</h1>
            {
                isLoading 
                ?(
                    <LoadingQuote/>
                )
                :(
                    <Quote title={title} image={image}/>
                   
                )
            }

            <button  
            onClick={() => suma()}
            className='btn btn-primary'>Siguiente Producto</button>
        
        </>
    )
}