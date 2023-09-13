import { useEffect, useState } from "react"
import {Message}  from './Message'
export const SimpleFormulario = () => {

    const [formState, setFormState] = useState({
        username:'amanda',
        email:'amanda@test.co'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        //console.log(event.target.value);
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value

        });
    }

    // useEffect(()=>{
    //     console.log('UseEffect!!!');
    // },[]);

    useEffect(()=>{
        console.log('UseEffect Formulario!!!');
    },[formState]);

    useEffect(()=>{
        console.log('UseEffect Email!!!');
    },[email]);

    return (<>
        <h1>Formulario</h1>
        <hr/>

        <input type="text"
            className="form-control"
            placeholder="Usuario"
            name="username"
            value={username}
            onChange={onInputChange}
            />

            {
                (username === 'amanda2') && <Message/>
            }
            
        <input type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
            />
        
    </>)
}

//Crear un nuevo Componente FormCustom (Uer, Mail, Password)
//Crear un Hook useForm