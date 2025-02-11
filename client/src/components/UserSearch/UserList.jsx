import React from 'react';
import "./styles/style.css";


const UserList = ({ users, onUserSelect }) => {
    return (
        <div className='user_list'>
            {users.map(user => (
                <span className='user_list__item' key={user.id} onClick={() => onUserSelect(user)}>
                    {user.username}
                </span>
            ))}
        </div>
    );
};

export default UserList;