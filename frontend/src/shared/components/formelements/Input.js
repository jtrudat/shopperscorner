//REUSABLE INPUT COMPONENT

import React, { useReducer, useEffect } from 'react'


//THE FUNCTION PORTION OF THE REDUCER. HERE THE PREVIOUS STATE IS INITIALLY MAINTAINED AND ONLY THE PORTIONS
//OF THE STATE DESIGNATED FOR CHANGE THROUGH THE SWITCH CASE ACTION TYPE ARE UPDATED. 
//BEST TO USE WHEN WORKING WITH MULTIPLE STATES
const inputReducer = (state, action) =>{
    switch (action.type){
        case 'CHANGE':
            return{
                ...state,
                value: action.value,
                isValid: true
            }
            default: 
            return (state)
    }
}

//REUSABLE INPUT ELEMENT COMPONENT TO HELP IMPLEMENT DRY PRACTICES AND HELP ENSURE DESIRED UNIFORM ACTIONS
export const Input = (props)=>{

    const [inState, dispatch] = useReducer(inputReducer, {value: props.value, isValid: true })

    //Destructuring used to help prevent infinite loops
    const { id, onInput } = props;
    const { value } = inState

    useEffect(()=>{
        onInput(id, value)
    }, [ id, value, onInput])

    //THE DISPATCH INTIIATES THE ACTION TYPE AND PAYLOAD IS USED TO REFERENCE THE NEW VALUE TO BE INJECTED 
    const changeHandler = (evt)=>{
        dispatch({type: 'CHANGE', value: evt.target.value, validators: props.validators})
    }


    const element = props.element === 'input' ? (
    <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder}
        onChange={changeHandler} 
        value={inState.value}></input>
    ) : (
    <textarea 
        id={props.id} 
        rows={props.rows || 3}
        onChange={changeHandler} 
        value={inState.value}></textarea>)

   

    return(
        <div className={`form-control ${!inState.isValid && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inState.isValid && <p>enter something to continue</p>}
        </div>
    )
}