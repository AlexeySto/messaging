import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';
import { loginUser } from './store/users/actions';

function App() {
  const dispatch = useDispatch();
  const userStor = JSON.parse(localStorage.getItem('authUser'));
  const authUser = useSelector(state => state.users.authUser);

  useEffect(() => {
    if (userStor && !authUser) {
      dispatch(loginUser(userStor));
    }
  }, [dispatch, userStor, authUser]);

  return (
    <div className="app">
      <Header />
      {authUser !== null ? <ChatPage /> : <AuthPage />}
      <Footer />
    </div>
  );
}

export default App;
