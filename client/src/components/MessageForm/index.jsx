import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/style.css";
import input_file_logo from "./../../images/input_file_logo.png"
import { addMessage } from '../../store/messages/actions';

const MessageForm = () => {
    const [content, setContent] = useState('');
    const [mediaFile, setMediaFile] = useState(null);
    const dispatch = useDispatch();

    const authUser = useSelector(state => state.users.authUser);
    const activChatId = useSelector(state => state.chats.activChatId);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = {
            chat_id: activChatId,
            user_id: authUser.id,
            content,
            media_type: mediaFile ? mediaFile.type : null,
            media_url: mediaFile ? URL.createObjectURL(mediaFile) : null, // Используйте URL.createObjectURL() для локальных файлов
        };

        dispatch(addMessage(message)); // Отправка сообщения в store
        // Сброс формы
        setContent('');
        setMediaFile(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="custom-file-input">
                <img className='file-icon' src={input_file_logo} alt="input_file_logo" />
                <input
                    type="file"
                    multiple
                    onChange={(e) => setMediaFile(e.target.files[0])}
                    title="Выберите один или несколько файлов"
                    placeholder="Нет выбранных файлов"
                />
            </label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Введите ваше сообщение"
                required
            />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default MessageForm;
