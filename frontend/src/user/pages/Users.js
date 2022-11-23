import { React } from 'react'
import { UsersList } from '../components/UsersLists'

export const Users = ()=>{
    const USERS = [
    {
        id: 'u1', 
    name: 'Black Panther', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lX5_vk_d1Ff5_6IshWpC1_1QRkdUeH7itw&usqp=CAU', 
    places: 4
    }
];
    return (
    <UsersList items={USERS}/>
        )
}