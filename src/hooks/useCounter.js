import { useState } from 'react';

export const useCounter = (initialValue = 10) =>{
    const [counter, setCounter] =  useState (initialValue);

    const suma = (value = 1) => {
        // const increment = (value ) 
        setCounter(counter + value);
    }

    const resta = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        if(counter === 0) return;
       
        setCounter(initialValue);
    }

    return {
        counter,
        suma,
        resta,
        reset
    }
}