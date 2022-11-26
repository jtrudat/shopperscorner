import React from 'react'
import { useReducer } from 'react'

export const Extras = ()=>{

    const [ state, dispatch] = useReducer(reducer, {count :0})



    return(
        <h2></h2>
    )

}