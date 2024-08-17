import { useReducer } from "react"

const inicialState = {
    contador: 0
}

type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'reset' }
    | { type: 'custom', payload: number };


const returnState = (state: typeof inicialState, action:ActionType ) => {
 
    switch (action.type) {
        case 'incrementar':
            
           return {
             ...state,
                contador: state.contador + 1
           }

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'reset':
            return inicialState;

        case 'custom':
            return {
                ...state,
                contador: action.payload
            }

    
        default:
            return state;
    }
    

   
}

export const ContadorReducer = () => {

    const [contadorState, dispatch] = useReducer(returnState, inicialState)


  return (
   <>
    <h3>ContadorReducer</h3> 
    
    <h3>Contador: {contadorState.contador} </h3>


    <button 
    className="btn btn-outline-primary"
    onClick={() => dispatch({type: 'incrementar'})}
    > +1</button>

    <button 
    className="btn btn-outline-warning"
    onClick={() => dispatch({type: 'decrementar'})} 
    >-1</button>

   
   <button
   className="btn btn-outline-danger"
    onClick={() => dispatch({type: 'reset'})}
   >
    Reset
   </button>


   <button
   className="btn btn-outline-info"
    onClick={() => dispatch({type: 'custom', payload: 100})}
   
   >100</button>

   </>
  )
}
