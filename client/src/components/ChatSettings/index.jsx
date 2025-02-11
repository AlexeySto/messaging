import React, { useState } from 'react';
import UserSearch from './../UserSearch';
import ChatOpenButton from './ChatOpenButton';
import "./styles/style.css";


const ChatSettings = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className='chat-settings'>
            <UserSearch onUserSelect={(user) => setSelectedUser(user)} />
            {selectedUser && (
                <ChatOpenButton user={selectedUser} onUserSelectClear={() => setSelectedUser(null)} />
            )}
        </div>
    );
};

export default ChatSettings;
