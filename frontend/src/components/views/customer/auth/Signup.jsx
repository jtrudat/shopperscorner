import { useState } from 'react'
import axios from 'axios'


export const Signup = ()=>{
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [street, setStreet] = useState('')
    let [postal, setPostal] = useState('')
    let [city, setCity] = useState('')

    let handleEmail = (evt)=>{
        setEmail(evt.target.value)
    }
    let handlePassword = (evt)=>{
        setPassword(evt.target.value)
    }
    let handleStreet = (evt)=>{
        setStreet(evt.target.value)
    }
    let handlePostal = (evt)=>{
        setPostal(evt.target.value)
    }
    let handleCity = (evt)=>{
        setCity(evt.target.value)
    }
    let handleCreateAccount = ()=>{
        let newAccount = {
            email : email,
            password : password,
            street : street,
            postalcode : postal,
            city : city
        }
        axios.post('/signup', newAccount)
        setEmail('')
        setStreet('')
        setPostal('')
        setPassword('')
        setCity('')
    }
        
    return(
        <div id="new-account">
            <h2 id="new-account">Create New Account</h2>
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
                <p>
                    <label>Street</label>
                    <input type="text" id="street" name="street" placeholder=" name and number" onChange={handleStreet}></input>
                </p>
                <p>
                    <label>Postal Code</label>
                    <input type="text" id="postal" name="postal" minLength="5" maxLength="5" placeholder="5 digit" onChange={handlePostal}></input>
                </p>
                <p>
                    <label>City</label>
                    <input type="text" id="city" name="city" onChange={handleCity}></input>
                </p>
                <button onClick={handleCreateAccount}>Create Account</button>

                <button><a href='/destination'> Go to the login screen</a></button>
                
               
            </form>
        </div>
    )
}