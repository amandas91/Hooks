

export const ShowIncrement = ({increment2}) =>{
    console.log('Generando ShowIncrement');

    return (
        <>
            <button  className="btn btn-primary"
            
            onClick={() => {
                increment2(3);
            }}>
                Increment
            </button>
        </>
    )
}

//Padre.jsx
//Hijo.jsx
//Corra
//