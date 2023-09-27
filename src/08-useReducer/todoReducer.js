
export const todoReducer = (initialState = [] , action) =>{

    switch (action.type) {
        case 'ADD':

            return [...initialState, action.payload];

        case 'DELETE':
            return initialState.filter(todo => todo.id !== action.payload);
            
        case 'UPDATE':
           return initialState.map(todo =>{

            if(todo.id === action.payload){//id
                return {
                    ...todo,
                    done:!todo.done // false - True
                }
            }

            return todo;
           })

        default:
            return initialState;
    }
}