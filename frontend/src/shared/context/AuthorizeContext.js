import { createContext } from 'react'

export const AuthorizeContext = createContext({
    isLoggedIn : false, 
    login:()=>{}, 
    logout: ()=>{}
})