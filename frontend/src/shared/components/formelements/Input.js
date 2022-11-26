import React, { useReducer, useEffect } from 'react'
//import { validate } from '../../checker/validators'

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

export const Input = (props)=>{

    const [inState, dispatch] = useReducer(inputReducer, {value: props.value, isValid: true })

    //Destructuring used to help prevent infinite loops
    const { id, onInput } = props;
    const { value } = inState

    useEffect(()=>{
        onInput(id, value)
    }, [ id, value, onInput])

    const changeHandler = (evt)=>{
        dispatch({type: 'CHANGE', value: evt.target.value, validators: props.validators})
    }

    // const handlerDataEnter =()=>{

    // }

    const element = props.element === 'input' ? (
    <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder}
        // onBlur={handlerDataEnter} 
        onChange={changeHandler} 
        value={inState.value}></input>
    ) : (
    <textarea 
        id={props.id} 
        rows={props.rows || 3}
        // onBlur={handlerDataEnter} 
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