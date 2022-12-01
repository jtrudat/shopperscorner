import React from 'react'
import { Card } from '../../shared/components/uielements/Card'
import { Button } from '../../shared/components/formelements/Button'
import { useContext } from 'react'
import { AuthorizeContext } from '../../shared/context/AuthorizeContext'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const PlaceItem = (props)=>{

    const authority = useContext(AuthorizeContext)
    const refresh = useHistory()

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
                {/* <Button inverse>VIEW ON MAP</Button> */}
                {authority.isLoggedIn && (<NavLink to={`/topics/${props.id}`}>EDIT</NavLink>)}
                {authority.isLoggedIn && (<button id={props.id} onClick={handleDelete}>DELETE</button>)}
            </div>
            </Card>
        </li>
    )
}