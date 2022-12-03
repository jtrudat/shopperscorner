import { React } from 'react'
import { UserItem } from './UserItem'


//USED TO DISPLAY OVERALL LIST OF USERS AND PASS PROPERTIES DOWN. HERE IS WHERE THE MONGO ID CAN BE CONVERTED 
//TO THE INDENTIFIER OF .ID 
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