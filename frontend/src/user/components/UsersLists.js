import { React } from 'react'
import { UserItem } from './UserItem'
//import { Card } from '../../shared/components/uielements/Card'

export const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No users just yet</h2>
            </div>
        )
    }
    return (
        <ul className="users-list">
            {props.items.map((user) => {
                return (
                    <UserItem key={user._id}
                        id={user._id} 
                        image={user.image} 
                        name={user.name}
                        placeCount={user.topics.length} />
                )
            })}
        </ul>
    )
}