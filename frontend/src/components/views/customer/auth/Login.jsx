import { useState } from 'react'
import axios from 'axios'


export const Login = ()=>{
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    

    let handleEmail = (evt)=>{
        setEmail(evt.target.value)
    }
    let handlePassword = (evt)=>{
        setPassword(evt.target.value)
    }
    
    let handleLogin = ()=>{
        let currentAccount = {
            email : email,
            password : password,
        }
        axios.post('/login', currentAccount)
        setEmail('')
        setPassword('')
        
    }
        
    return(
        <div id="new-account">
            <h2 id="new-account">Login</h2>
            <form action="" method="">
                <p>
                    <label>Email</label>
                    <input type="email" id="email" name="email" onChange={handleEmail}></input>
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" id="password" name="password" minLength="8" placeholder="at least 8 characters" onChange={handlePassword}></input>
                </p>
                <hr></hr>

                <button onClick={handleLogin}>Login</button>

                <button><a href='/customer/auth/Signup'> Go to create account</a></button>
                
               
            </form>
        </div>
    )
}