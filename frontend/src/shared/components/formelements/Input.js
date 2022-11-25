import React, { useReducer, useEffect } from 'react'


const inputReducer = (state, action) =>{
    switch (action.type){
        case 'CHANGE':
            return{
                ...state,
                value: action.val,
                isValid: true
            }
            default: 
            return (state)
    }
}

export const Input = (props)=>{

    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false})

    const { id, onInput } = props;
    const { value } = inputState

    useEffect(()=>{
        onInput(id, value)
    }, [ id, value, onInput])

    const changeHandler = (evt)=>{
        dispatch({type: 'CHANGE', val: evt.target.value})
    }

    const element = props.element === 'input' ? (
    <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={changeHandler} 
        value={inputState.value}></input>
    ) : (
    <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        onChange={changeHandler} 
        value={inputState.value}></textarea>)

   

    return(
        <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && <p>enter something to continue</p>}
        </div>
    )
}