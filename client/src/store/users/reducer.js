import { LOAD_USERS, ADD_USER, DELETE_USER, LOGIN_USER, LOGOUT_USER } from "./actions";

const initialState = {
    userList: [],
    authUser: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_USERS: {
            return {
                ...state,
                userList: action.users,
            };
        }


        case ADD_USER: {
            return {
                ...state,
                userList: [...state.userList, action.user],
            };
        }

        case DELETE_USER: {
            const newUserList = state.userList.filter(user => user.user_id !== action.id);
            return {
                ...state,
                userList: newUserList,
            };
        }

        case LOGIN_USER: {
            try {
                localStorage.setItem('authUser', JSON.stringify(action.user));
            } catch (e) {
                console.error(e);
            }
            return {
                ...state,
                authUser: action.user
            };
        }

        case LOGOUT_USER: {
            try {
                localStorage.setItem('authUser', null);
            } catch (e) {
                console.error(e);
            }
            return {
                ...state,
                authUser: null
            };
        }

        default:
            return state;
    }
};

export default usersReducer;
