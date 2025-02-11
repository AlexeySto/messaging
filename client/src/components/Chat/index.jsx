import MessageForm from "../MessageForm";
import MessageList from "../MessageList";
import "./styles/style.css"


const Chat = () => {
  return (
    <div className="chat">
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default Chat;
