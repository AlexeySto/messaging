import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "./../../store/users/actions";
import UserList from './UserList';
import './styles/style.css';

const UserSearch = ({ onUserSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isListVisible, setListVisible] = useState(false);
    const inputRef = useRef(null);
    const userListRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    const users = useSelector(state => state.users.userList);
    const authUser = useSelector(state => state.users.authUser);

    const userWithoutAuthUser = users.filter(user => user.id !== authUser.id);

    const filteredUsers = userWithoutAuthUser.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setListVisible(e.target.value.length > 0);
    };

    const handleUserSelect = (user) => {
        onUserSelect(user);
        setSearchTerm('');
        setListVisible(false);
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target) &&
            userListRef.current && !userListRef.current.contains(event.target)) {
            setListVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='user_search'>
            <input
                className='user_search__input'
                type="text"
                placeholder="Поиск пользователя"
                value={searchTerm}
                onChange={handleChange}
                ref={inputRef}
                onFocus={() => setListVisible(true)} // показать список при фокусе
            />
            {isListVisible && (
                <div ref={userListRef}>
                    <UserList
                        users={filteredUsers}
                        onUserSelect={handleUserSelect}
                    />
                </div>
            )}
        </div>
    );
};

export default UserSearch;
