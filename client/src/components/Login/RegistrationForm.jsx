import { register } from "../../services/ApiService";
import { useState } from "react";
import Button from "./Button";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../store/users/actions"
import "./styles/style.css";

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверка на совпадение паролей
        if (password !== confirmPassword) {
            setError('Пароли не совпадают!');
            return;
        }

        // Создаем объект с данными для отправки на сервер
        const body = {
            username: name,
            email: email,
            password: password
        };

        console.log(body);

        try {
            const response = await register(body);

            if (response.ok) {
                const user = {
                    id: response.data.id,
                    username: name,
                    email: email
                };
                dispatch(loginUser(user)); // Обновляем redux с полученными данными
                setSuccess('Регистрация успешна!');
                // Сброс формы
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setError('');
            }

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Регистрация</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}

            <div>
                <input className="form__input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя"
                    required
                />
            </div>

            <div>
                <input className="form__input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>

            <div>
                <input className="form__input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                    required
                />
            </div>

            <div>
                <input className="form__input"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Повторите пароля"
                    required
                />
            </div>
            <p className="form__text">Пожалуйста, используйте 8 или более символов, по крайней мере, 1 цифру и сочетание прописных и строчных букв</p>
            <Button type="submit" label={'Регистрация'} />
        </form>
    );
};

export default RegistrationForm;