import { ADD_MESSAGE, LOAD_MESSAGES } from "./actions";


const initialState = {
    messageList: [],
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_MESSAGES: {
            return {
                ...state,
                messageList: action.messages
            }
        }

        case ADD_MESSAGE: {
            return {
                ...state,
                messageList: [...state.messageList, action.message],
            };
        }
        
        default:
            return state;
    }
};
export default messagesReducer;
