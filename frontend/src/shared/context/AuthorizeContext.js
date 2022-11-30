import { createContext } from 'react'

export const AuthorizeContext = createContext({
    isLoggedIn : false, 
    userId : null,
    login:()=>{}, 
    logout: ()=>{}
})