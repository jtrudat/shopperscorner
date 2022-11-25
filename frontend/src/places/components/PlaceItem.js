import React from 'react'
import { Card } from '../../shared/components/uielements/Card'
import { Button } from '../../shared/components/formelements/Button'

export const PlaceItem = (props)=>{
    return(
        <li className="place-item">
            <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.topic}></img>
            </div>
            <div className="place-item__info">
                <h2>{props.topic}</h2>
                {/* <h3>{props.topic}</h3> */}
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
                {/* <Button inverse>VIEW ON MAP</Button> */}
                <Button to={`/topics/${props.id}`}>EDIT</Button>
                <Button danger>DELETE</Button>
            </div>
            </Card>
        </li>
    )
}