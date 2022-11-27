import { createContext } from 'react'

export const AuthorizeContext = createContext({
    isLogin : false, 
    login:()=>{}, 
    logout: ()=>{}
})