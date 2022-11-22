import { Link } from 'react-router-dom'

export const Mainlinks = ()=>{
    return(
        
        <ul>
            <li>
                <Link to='/customer/auth/Signup'>Sign up</Link>
            </li>
            <li>
                <Link to='/customer/auth/Login'>login</Link>
            </li>
        </ul>
         )
}