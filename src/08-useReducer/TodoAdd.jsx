import { useForm } from "../hooks"

export const TodoAdd = ({onNewTodo}) =>{

    const {description, onInputChange, onReset } = useForm(
        {
            description:''
        }
    )

    const onFromSubmit = (event) =>{
        event.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onReset();

    }

    return (
        <>
            <form onSubmit={onFromSubmit}>
                <input type="text"
                placeholder="Nueva Tarea"
                className="form-control"
                name="description"
                value={ description }
                onChange={onInputChange}
                /> 

                <button type="submit" className="btn btn-outline-primary"> Agregar </button>           
            </form>
        </>
    )
}