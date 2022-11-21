import { Link } from 'react-router-dom';

export const Mainlinks = ()=>{
    return(
        
        <ul>
            <li>
                <Link to='/welcome'>Stuff to Shop</Link>
            </li>
            <li>
                <Link to='/destination'>Order review</Link>
            </li>
        </ul>
         )
}