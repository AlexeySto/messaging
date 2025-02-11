import { fetchChats, createChat } from "./../../services/ApiService";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const LOAD_CHATS = 'CHATS::LOAD_CHATS';

export const loadChats = (id) => async (dispatch) => {
    try {
        const chats = await fetchChats(id);
        if (chats) {
            dispatch({ type: LOAD_CHATS, chats });
        }
    } catch (error) {
        if (error.chats && error.chats.status === 429) {
            console.warn('Слишком много запросов. Повторная попытка через 1 секунду.');
            await delay(1000);  // Задержка 1 секунда перед повторной попыткой
            return dispatch(loadChats(id));  // Повторная попытка отправки сообщения
        }
        console.error('Ошибка загрузки чатов:', error);
    }
};

export const ADD_CHAT = "CHATS::ADD_CHAT";

export const addChat = (chat) => async (dispatch) => {
    try {
        const response = await createChat(chat);
        if (response) {
            dispatch({ type: ADD_CHAT, response });
        }
    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.warn('Слишком много запросов. Повторная попытка через 1 секунду.');
            await delay(1000);  // Задержка 1 секунда перед повторной попыткой
            return dispatch(addChat(chat));  // Повторная попытка отправки сообщения
        }
        console.error('Ошибка при добавлении чата:', error);
    }

};


export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    id
});


export const ACTIV_CHAT = "CHATS::ACTIV_CHAT";

export const activChat = (id) => ({
    type: ACTIV_CHAT,
    id
});
