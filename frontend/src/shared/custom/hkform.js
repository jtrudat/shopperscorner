import { useCallback } from 'react'
import { useReducer } from 'react'


const formReducer = ( state, action ) =>{
    switch(action.type){
        case 'INPUT_CHANGE':
            // let formValid = true
            // for (const inputId in state.inputs)
            return(
                {
                    ...state,
                    inputs:{
                        ...state.inputs, 
                        [action.inputId]: {value: action.value}
                    }
                });
        
        default:
            return (state)
    }
}

export const useForm = (initialInputs)=>{
    
    const [ formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs
    })

    const handleInput = useCallback((id, value) =>{
        dispatch({type:'INPUT_CHANGE', 
                  value: value, 
                  inputId : id})
                 },[dispatch])

    return [ formState, handleInput]             
}


// inputs: {
//     topic: {
//         value: ''
//     },
//     description: {
//         value: ''
//     }
// }