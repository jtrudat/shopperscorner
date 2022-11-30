import React from 'react'
import { Card } from '../../shared/components/uielements/Card'
import { PlaceItem } from './PlaceItem'
import { Button } from '../../shared/components/formelements/Button'

export const PlaceList = (props)=>{
    
    if (props.items.length === 0) {
        return(
            <div className="place-list center">
                <Card>
                    <h2>No topics just yet</h2>
                    <Button to='/topics/new'>please add something</Button>
                </Card>
            </div>
        )
    }
    return(
        <ul className="place-list">
            {props.items.map(topic => 
                    <PlaceItem 
                    key={topic._id} 
                    id={topic._id} 
                    image={topic.image} 
                    topic={topic.topic} 
                    description={topic.description} 
                    creatorId={topic.creator} 
                    />)}
        </ul>
    )
}