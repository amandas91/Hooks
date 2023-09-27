
export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) =>{

    return(
        <ul>
            {
                todos.map( todo => (
                    <li className="list-group-item" key={todo.id}> 
                        <span className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
                        onClick={ () => onToggleTodo(todo.id) }
                        > {todo.description} </span> 
                        <button 
                        className="btn btn-danger"
                        onClick={ () => onDeleteTodo(todo.id) } > Borrar </button>
                    </li>
                ))
            }
        </ul>
    )
}