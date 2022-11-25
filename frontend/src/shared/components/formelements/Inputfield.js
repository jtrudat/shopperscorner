import React, { useReducer, useEffect } from 'react'


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

    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false})

    const { id, onInput } = props;
    const { value } = inputState

    useEffect(()=>{
        onInput(id, value)
    }, [ id, value, onInput])

    const changeHandler = (evt)=>{
        dispatch({type: 'CHANGE', value: evt.target.value})
    }

    const topicElement = props.element === 'input' ? (<input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value}></input>
    ) : (<textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value}></textarea>)

   

    return(
        <div className={`form-control `}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            
        </div>
    )
}