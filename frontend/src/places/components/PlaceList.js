import React from 'react'
import { Card } from '../../shared/components/uielements/Card'
import { PlaceItem } from './PlaceItem'

export const PlaceList = (props)=>{
    
    if (props.items.length === 0) {
        return(
            <div className="place-list center">
                <Card>
                    <h2>No topics just yet</h2>
                    <buttton>Add something to muse and peruse about</buttton>
                </Card>
            </div>
        )
    }
    return(
        <ul className="place-list">
            {props.items.map(place => <PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creator} coordinates={place.location}/>)}
        </ul>
    )
}