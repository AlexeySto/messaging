import Chat from "../../components/Chat";
import ChatSettings from "../../components/ChatSettings";
import ChatsList from "../../components/ChatsList";
import "./styles/style.css"

const ChatPage = () => {
  return (
    <div className="page">
      <ChatsList />
      <Chat />
      <ChatSettings />
    </div>
  );
};

export default ChatPage;
