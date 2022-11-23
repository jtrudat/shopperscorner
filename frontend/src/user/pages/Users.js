import { React } from 'react'
import { UsersList } from '../components/UsersLists'

export const Users = ()=>{
    const USERS = [
    // {
    //     id: 'u1', 
    // name: 'Joe Blow', 
    // image: 'https://placekitten.com/g/200/301', 
    // places: 3
    // }
];
    return (
    <UsersList items={USERS}/>
        )
}