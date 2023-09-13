import {useCounter} from './hooks/useCounter'
export const CounterCustom = () =>{

    const {counter, suma, resta, reset } = useCounter();

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={suma}> + 1</button>
            <button onClick={reset}> Reset </button>
            <button onClick={resta}> - 1</button>
        </>
    )
}