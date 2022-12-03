import { createContext } from 'react'


//APART OF USECONTEXT. THIS CONTAINS THE VALUES PROPAGATED THROUGHOUT THE APPLICATION
export const AuthorizeContext = createContext({
    isLoggedIn : false, 
    userId : null,
    login:()=>{}, 
    logout: ()=>{}
})