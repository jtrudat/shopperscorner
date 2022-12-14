import { React } from 'react'
import  Avatar  from '../../shared/components/uielements/Avatar'
import { Link } from 'react-router-dom'
import { Card } from '../../shared/components/uielements/Card'

//USED TO DISPLAY THE USER AND NUMBER OF TOPICS WITHIN THE OVERAL USER LIST VIEW
export const UserItem = (props)=>{
    return(
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/topics`}>
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name}/>
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>
                        {props.placeCount} {props.placeCount === 1 ? 'Topic': 'Topics'}
                        {/* <br></br>
                        {props.id} */}
                    </h3>
                </div>
                </Link>
            </Card>
        </li>
    )
}