import { useEffect, useReducer } from "react"
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () =>{

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDeleteTodo=  (id) =>{
        dispatch({
            type: 'DELETE',
            payload: id
        });

    }

    const handleToggleTodo=  (id) =>{
        const action = {
            type: 'UPDATE',
            payload: id
        }

        dispatch(action);
    }

    const handleNewTodo=  ( todo ) =>{

        const action = {
            type: 'ADD',
            payload: todo
        }

        dispatch (action);

    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    }
}