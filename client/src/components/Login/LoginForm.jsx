import Button from "./Button";
import { useState } from "react";
import { logIn } from "../../services/ApiService";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../store/users/actions";
import "./styles/style.css";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Создаем объект с данными для отправки на сервер
        const body = {
            email: email,
            password: password
        };

        try {
            const response = await logIn(body); // Ожидаем ответ от logIn
            if (response.status === 200) {
                const user = {
                    id: response.data.id,
                    username: response.data.name,
                    email: email
                };
                dispatch(loginUser(user)); // Обновляем redux с полученными данными
            }

        } catch (error) {
            console.error("Ошибка при входе:", error);
            // Обработка ошибок (например, показать сообщение пользователю)
        }

        setEmail('');
        setPassword('');
    };

    return (
        <form className="form" onSubmit={handleSubmit} >
            <label className="form__title">LOGIN</label>
            <input className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Имя" required />
            <input className="form__input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <Button type="submit" label={'ВОЙТИ'} />
        </form>
    );
};

export default LoginForm;
