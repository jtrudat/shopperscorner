import React from 'react'
import { Card } from '../../shared/components/uielements/Card'
// import { Button } from '../../shared/components/formelements/Button'
import { useContext } from 'react'
import { AuthorizeContext } from '../../shared/context/AuthorizeContext'
import axios from 'axios'
//import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const PlaceItem = (props)=>{
    //CONTEXT IS USED TO GRAB THE USERS MONGO ID FROM INTIAL LOGIN RES.JSON. FROM THERE THE STATUS OF THE IS LOOGED IN 
    // AND USER ID STATE IS MADE AVAILBALE TO ALL CHILDREN COMPONENTS OF APP.JS AND CAN BE USED TO SHOW 
    const authority = useContext(AuthorizeContext)
    const userIden = authority.userId
    const topicCreator = useParams().userId

    // const refresh = useHistory() //A PAGE REFRESH OR USEEFFECT IS NOT NEEDED FOR THE COMPONENT TO RERENDER

    //DELETES THE TOPIC FROM THE DATABASE. THE CONTROLLER ALSO CONTAINS THE LOGIC TO DELETE THE ASSOCIATION WITHIN THE CREATORS(USER) ARRAY
    const handleDelete=(evt)=>{
        let idTag = evt.target.id
        console.log(`${idTag}`)
        axios.delete(`/api/places/${idTag}`)
        
    }

    return(
        <li className="place-item">
            <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.topic}></img>
            </div>
            <div className="place-item__info">
                <h2>{props.topic}</h2>
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
            {authority.isLoggedIn && topicCreator === userIden && (<NavLink to={`/topics/${props.id}`}>EDIT</NavLink>)}
                {authority.isLoggedIn && topicCreator === userIden && (<button className="button" id={props.id} onClick={handleDelete}>DELETE</button>)}
            </div>
            </Card>
        </li>
    )
}