import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef } from 'react';
import echo from './../../services/Echo';
import Message from './Message';
import "./styles/style.css";
import { addMessage, loadMessages } from "../../store/messages/actions";

const MessageList = () => {
  const activChatId = useSelector(state => state.chats.activChatId);
  const messages = useSelector(state => state.messages.messageList) || [];

  const messageListRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (activChatId) {
      dispatch(loadMessages(activChatId));
    }
    echo.channel(`chat.${activChatId}`)
      .listen('MessageSent', (e) => {
        dispatch(addMessage(e.message));
      });

    return () => {
      echo.leave(`chat.${activChatId}`);
    };
  }, [activChatId, dispatch]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight; // Прокрутить вниз
    }
  }, [messages]);

  const messagesFromCurrentChat = messages.filter(message => message && message.chat_id === activChatId);

  return (
    <div className="message-list" ref={messageListRef}>
      {messagesFromCurrentChat.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageList;
