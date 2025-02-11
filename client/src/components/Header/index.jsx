import "./styles/style.css";
import logo from "./../../images/logo.png";
import { useSelector } from 'react-redux';
import Button from "./Button";

const Header = () => {
    const authUser = useSelector(state => state.users.authUser);

    return (
        <div className="header">
            <a href="/" className="header__logo">
                <img className="header__logo__img" src={logo} alt="logo" />
            </a>
            <h1 className="header__title">Messaging App</h1>
            {(authUser !== null) && (<Button label={"Выйти"} />)}
        </div>
    );
};

export default Header;