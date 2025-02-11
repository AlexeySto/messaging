import { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';


const Login = () => {

    const [registrationFormIsActive, setRegistrationFormIsActive] = useState(false);

    return (
        <div className='registration'>
            {registrationFormIsActive ?
                <>
                    <RegistrationForm />
                    <button className="form__button_registration" type='button' onClick={() => setRegistrationFormIsActive(false)}>ВОЙТИ</button>
                </>
                :
                <>
                    <LoginForm />
                    <button className="form__button_registration" type='button' onClick={() => setRegistrationFormIsActive(true)}>РЕГИСТРАЦИЯ</button>
                </>
            }
        </div>
    );
}

export default Login;
