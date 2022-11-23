import { React } from 'react'
import { UsersList } from '../components/UsersLists'

export const Users = ()=>{
    const USERS = [
    {
        id: 'u1', 
    name: 'Joe Bloww', 
    image: 'https://placekitten.com/g/200/310', 
    places: 4
    }
];
    return (
    <UsersList items={USERS}/>
        )
}