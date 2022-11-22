import { React } from 'react'
import { UserItem } from './UserItem'

export const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>No users just yet</h2>
            </div>
        )
    }
    return (
        <ul>
            {props.item.map((user) => {
                return (
                    <UserItem key={user.id}
                        id={user.id} 
                        image={user.image} 
                        name={user.name}
                         placeCount={user.places} />
                )
            })}
        </ul>
    )
}