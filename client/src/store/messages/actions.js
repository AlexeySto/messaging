import { sendMessage as apiSendMessage, fetchMessages } from "./../../services/ApiService";


export const LOAD_MESSAGES = 'MESSAGES::LOAD_MESSAGES';

export const loadMessages = (id) => async (dispatch) => {
    try {
        const messages = await fetchMessages(id);
        dispatch({ type: LOAD_MESSAGES, messages });
    } catch (error) {
        console.error('Ошибка загрузки сообщений:', error);
    }
};
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const addMessage = (messageBody) => async (dispatch) => {
    try {
        const message = await apiSendMessage(messageBody);
        if (message) {
            dispatch({ type: ADD_MESSAGE, message });
        }
    } catch (error) {
        if (error.message && error.message.status === 429) {
            console.warn('Слишком много запросов. Повторная попытка через 1 секунду.');
            await delay(1000);  // Задержка 1 секунда перед повторной попыткой
            return dispatch(addMessage(messageBody));  // Повторная попытка отправки сообщения
        }
        console.error('Ошибка отправки сообщения:', error);
    }
};
