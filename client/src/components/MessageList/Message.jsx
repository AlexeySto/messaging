import { useSelector } from "react-redux";
import { format, parseISO } from 'date-fns';
import Media from "./Media";


const Message = ({ message }) => {
    const { content, media_type, media_url, created_at } = message;

    const users = useSelector(state => state.users.userList);
    const authUser = useSelector(state => state.users.authUser);

    // Находим пользователя из списка пользователей
    const user = users.find(user => user.id === message.user_id);
    const user_name = user ? user.username : 'Неизвестный пользователь'; // Предоставление значения по умолчанию

    const time_message = format(parseISO(created_at), 'dd MM yyyy, HH:mm');

    return (
        <div className={message.user_id === authUser.id ? "my_message_box message_box" : "message_box"}>
            <div className={message.user_id === authUser.id ? "my_message message" : "message"}>
                <a href="/" className="message__author">{user_name}</a>
                <Media media_type={media_type} media_url={media_url} />
                <span className="message__text">{content}</span>
                <span className="message__time">{time_message}</span>
            </div>
        </div>
    );
}

export default Message;
