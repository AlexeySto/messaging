import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadChats, activChat } from "./../../store/chats/actions";
import ChatView from './ChatView';
import "./styles/style.css";

const ChatsList = () => {
  // const authUser = useSelector(state => state.users.authUser);
  const activChatId = useSelector(state => state.chats.activChatId);
  const chats = useSelector(state => state.chats.chatList);
  const dispatch = useDispatch();

  const handleChatClick = (id) => {
    dispatch(activChat(id));
  };

  return (
    <div className="chats-list">
      {chats.map((chat) => (
        <ChatView key={chat.id} chat={chat}
          isActive={activChatId === chat.id}
          onChatClick={handleChatClick} />
      ))}
    </div>
  );
};

export default ChatsList;
