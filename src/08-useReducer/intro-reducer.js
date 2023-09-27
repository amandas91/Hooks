const initialState = [{
    id:1,
    todo: 'Crear repositorio',
    done: false
}];

//Reducer
const todoReducer = (state = initialState, action = {}) => {

    if(action.type === 'ADD'){
        return [...state, action.payload]
    }

    return state
}


let todo = todoReducer();
//console.log(todo);


const newTodo = {
    id:2,
    todo: 'Crear rama',
    done: false
}

const addTodoAction = {
    type:'ADD',
    payload: newTodo,
}

todo = todoReducer(todo, addTodoAction);

console.log(todo);