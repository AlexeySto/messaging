import { LOAD_CHATS, ACTIV_CHAT, ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = {
    chatList: [],
    activChatId: null
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_CHATS: {
            return {
                ...state,
                chatList: action.chats,
            }
        }

        case ADD_CHAT: {
            return {
                ...state,
                chatList: [...state.chatList, action.response],
                activChatId: action.response.id
            };
        }

        case DELETE_CHAT: {
            const newChatList = state.chatList.filter(chat => chat.chat_id !== action.chat_id);
            return {
                ...state,
                chatList: newChatList
            };
        }

        case ACTIV_CHAT: {
            return {
                ...state,
                activChatId: action.id
            };
        }

        default:
            return state;
    }
};

export default chatsReducer;
