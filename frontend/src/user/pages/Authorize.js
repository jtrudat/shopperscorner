import React from 'react'
import { Card } from '../../shared/components/uielements/Card'
import { Input } from '../../shared/components/formelements/Input'
import { Button } from '../../shared/components/formelements/Button'
import { useForm } from '../../shared/custom/hkform'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthorizeContext } from '../../shared/context/AuthorizeContext'
import axios from 'axios'


//COMPONENT RENDERS A CONDITIONAL TERNARY OPERATOR TO SWITCH A BUTTON BETWEEN LOGIN AND SIGNUP. 
//ALSO, USE CONTEXT PROPAGATES THAT THE USER IS LOGGED IN. AXIOS SWITCHES THE POSTING FROM LOGIN TO SIGNUP ROUTING WHEN APPLICABLE 
export const Authorize =()=>{
    
    const auth = useContext(AuthorizeContext)

    const [ isLogin, setIsLogin ] = useState(true)
    const [ isLoading, setIsLoading ] = useState(false)

    const [ formState, handleInput ] = useForm({
        email:{
            value: '',
            isValid: true
        },
        password: {
            value: '',
            isValid: true
        }
    })

    const handleLoginSubmit = async (evt)=>{
        evt.preventDefault()
        setIsLoading(true)
        if (isLogin){
            axios.post('/api/users/login', {
            email : formState.inputs.email.value,
            password : formState.inputs.password.value
            })
            .then(response =>{
                console.log(response.data.user._id)
                setIsLoading(false)
                auth.login(response.data.user._id)
            })
        }
        else{
            
            await axios.post('/api/users/signup', {
            name : formState.inputs.name.value,
            email : formState.inputs.email.value,
            password : formState.inputs.password.value
            })
            .then(response =>{
            console.log(response.data.user._id)
            setIsLoading(false)
            auth.login(response.data.user._id)
            })}
        
        
    }

    const handleLoginMode = ()=>{
        setIsLogin(prev => !prev)
    }

    return(
        <Card className="authentication">
            <h2>Login Needed</h2>
        
            <form onSubmit={handleLoginSubmit}>
                {!isLogin && 
                <Input 
                    element="input"
                    id="name"
                    type="text"
                    label="Name"
                    onInput={handleInput}>
                </Input>}
                <Input 
                    element="input"
                    id="email"
                    type="email"
                    label="Email address"
                    onInput={handleInput}>

                </Input>

                {/* TYPE PASSWORD WILL AUTOMATCALLY BLANK OUT PASSWORD VIEWING */}
                <Input 
                    element="input"
                    id="password"
                    type="password" 
                    label="Password"
                    onInput={handleInput}>
                </Input>
                <Button type="submit">{isLogin ? 'LOGIN' : "SIGN UP"}</Button>
            </form>
            <Button onClick={handleLoginMode}> Change to {isLogin ? 'Sign Up' : 'Login'}</Button>
            </Card>
    )
}