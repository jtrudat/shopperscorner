import { React } from 'react'
import { UsersList } from '../components/UsersLists'

export const Users = ()=>{
    const USERS = [
    {
    id: 'u1', 
    name: 'Black Panther', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lX5_vk_d1Ff5_6IshWpC1_1QRkdUeH7itw&usqp=CAU', 
    topics: 2
    },
    {
        id: 'u2', 
        name: 'Namor', 
        image: 'https://cdn.vox-cdn.com/thumbor/Tmlxmjq5cqpQC97zMSSigwy-S5k=/0x0:1298x730/2420x1613/filters:focal(546x262:752x468):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71656236/namor2.0.jpg', 
        topics: 1
        }
];
    return (
    <UsersList items={USERS}/>
        )
}