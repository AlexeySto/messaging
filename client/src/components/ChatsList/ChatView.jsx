

const ChatView = ({ chat, isActive, onChatClick}) => {

    return (
        <div className={isActive ? "chat-view chat-view__active" : "chat-view"}  onClick={()=> onChatClick(chat.id)}>
            <span className="chat-view__title">{ chat.chat_name }</span>
        </div>);
}

export default ChatView;
