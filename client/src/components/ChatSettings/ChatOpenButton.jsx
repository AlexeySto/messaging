import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadChats } from "../../store/chats/actions"
import { activChat, addChat } from '../../store/chats/actions';
import "./styles/style.css";


const ChatOpenButton = ({ user, onUserSelectClear }) => {
    const authUser = useSelector(state => state.users.authUser);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authUser) {
            dispatch(loadChats(authUser.id));
        }
    }, [dispatch, authUser]);

    const chats = useSelector(state => state.chats.chatList);

    const chatsWithSelectedUser = chats.filter(chat => chat.users_id.includes(user.id) && chat.users_id.length === 1);


    const handleChatOpen = () => {
        if (chatsWithSelectedUser.length > 0) {
            dispatch(activChat(chatsWithSelectedUser[0].id));
        }
        else {
            const newChat = {
                user_id: authUser.id,
                users_id: user.id.toString(),
                chat_name: user.username,
            };
            dispatch(addChat(newChat));
        }
        onUserSelectClear();
    };

    return (
        <div className='chat-open-button'>
            <span className='chat-open-button__title'>{user.username}</span>
            <button className='chat-open-button__button' onClick={handleChatOpen}>Отправить сообщение</button>
        </div>
    );
};

export default ChatOpenButton;
