import React from 'react'
import { Card } from '../../shared/components/uielements/Card'
import { Input } from '../../shared/components/formelements/Input'
import { Button } from '../../shared/components/formelements/Button'
import { useForm } from '../../shared/custom/hkform'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthorizeContext } from '../../shared/context/AuthorizeContext'


export const Authorize =()=>{

    const auth = useContext(AuthorizeContext)

    const [ isLogin, setIsLogin ] = useState(true)

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

    const handleLoginSubmit = (evt)=>{
        evt.preventDefault()
        console.log(formState.inputs)
        auth.login()
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
                <Input 
                    element="input"
                    id="password"
                    type="password" //type password will automatically blank out the words. type date-time will auto form calendar
                    label="Password"
                    onInput={handleInput}>
                </Input>
                <Button type="submit">{isLogin ? 'LOGIN' : "SIGN UP"}</Button>
            </form>
            <Button onClick={handleLoginMode}> change to {isLogin ? 'sign up' : 'login'}</Button>
        </Card>
    )
}