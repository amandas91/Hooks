import { useState } from "react"

export const useForm = (initianForm = {}) => {

    const [formState, setFormState] = useState(initianForm);


    const onInputChange = ({target}) =>{
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value

        });
    }

    const onReset = () =>{
        setFormState(initianForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onReset
    }
}