import { Message } from  './Message'
import { useForm } from '../hooks/useForm'

export const FormCustom = ()=>{

   const { formState, onInputChange, onReset, username, email, password } = useForm({
        username:'',
        email: '',
        password: ''
   })

    return (
        <>
        <h1>Formulario Simple</h1>
        <hr/>
        <input type="text"
            className="form-control" 
            placeholder="User Name"
            name="username"
            value={username}
            onChange={onInputChange}>
        </input>

        <input type="text mt-2"
            className="form-control" 
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}>
        </input>

        <input type="password"
            className="form-control" 
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}>
        </input>

        {
            (username === 'amanda2') && <Message/>
        }

       <button onClick={onReset}> Reset </button>
        
        </>
    )
}