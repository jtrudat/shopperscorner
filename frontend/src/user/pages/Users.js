import axios from 'axios'
import { React } from 'react'
import { useEffect } from 'react'
import { UsersList } from '../components/UsersLists'
import { useState } from 'react'

//THIS COMPONENT RETRIEVES ALL OF THE USERS FROM THE DATABASE ANS PASSES IT DOWN IN PROPS TO SPECIFY HOW IT IS TO BE RENDERED
export const Users = ()=>{
    const [ isLoading, setIsLoading ] = useState()
    const [ loadedUsers, setLoadedUsers] = useState()
    
   
    useEffect(()=>{
        setIsLoading(true)
        axios.get('/api/users')
        .then((response)=>{
            console.log(response.data.users)
            setLoadedUsers(response.data.users)
            setIsLoading(false)
        })
    }, [])
   
    return (
        <div>
        { !isLoading && loadedUsers && <UsersList items={loadedUsers}/>}
        </div>
        )
}


// const USERS = [
//     {
//     id: 'u1', 
//     name: 'Black Panther', 
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lX5_vk_d1Ff5_6IshWpC1_1QRkdUeH7itw&usqp=CAU', 
//     topics: 2
//     },
//     {
//         id: 'u2', 
//         name: 'Namor', 
//         image: 'https://cdn.vox-cdn.com/thumbor/Tmlxmjq5cqpQC97zMSSigwy-S5k=/0x0:1298x730/2420x1613/filters:focal(546x262:752x468):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71656236/namor2.0.jpg', 
//         topics: 1
//         },
//         {
//             id: 'u3', 
//             name: 'Namor', 
//             image: 'https://cdn.vox-cdn.com/thumbor/Tmlxmjq5cqpQC97zMSSigwy-S5k=/0x0:1298x730/2420x1613/filters:focal(546x262:752x468):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71656236/namor2.0.jpg', 
//             topics: 1
//             }
// ];

 // useEffect(()=>{
    //     const sendRequest = async () =>{
    //         setIsLoading(true)
    //         const response = await fetch('http://localhost:4100/api/users')
    //         const responseData = await response.json()
    //         console.log(responseData.users)
    //         setLoadedUsers(responseData.users)
    //         setIsLoading(false)
    //     }
    //     sendRequest()
    // }, [])