import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import chatsReducer from './chats/reducer';
import usersReducer from './users/reducer';
import messagesReducer from './messages/reducer';


const rootReducer = combineReducers({
  chats: chatsReducer,
  users: usersReducer,
  messages: messagesReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['chats', 'messages'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  // persistedReducer,
  devTools: window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
});

// export const persistor = persistStore(store);
