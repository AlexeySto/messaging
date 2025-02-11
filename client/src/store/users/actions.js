import { fetchUsers } from "./../../services/ApiService";

export const LOAD_USERS = 'USERS::LOAD_USERS';

export const loadUsers = () => async (dispatch) => {
    try {
        const users = await fetchUsers();
        dispatch({ type: LOAD_USERS, users });
    } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
    }
};

export const ADD_USER = "USERS::ADD_USER";

export const addUser = (user) => ({
    type: ADD_USER,
    user
});


export const DELETE_USER = "USERS::DELETE_USER";

export const deleteUser = (id) => ({
    type: DELETE_USER,
    id
});


export const LOGIN_USER = "USERS::LOGIN_USER";

export const loginUser = (user) => ({
    type: LOGIN_USER,
    user
});


export const LOGOUT_USER = "USERS::LOGOUT_USER";

export const logoutUser = () => ({
    type: LOGOUT_USER
});