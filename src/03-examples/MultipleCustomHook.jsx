import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHook = () =>{

    const {data, isLoading, hasError } = useFetch('https://fakestoreapi.com/products/2');
    console.log(data);

    return (
        <>
            <h1>Store</h1>
        </>
    )
}