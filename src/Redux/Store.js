import { combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './user/AuthReducer';
import userInfo from './user/UserInfoReducer';
import adminInfo from './admin/AdminInfoReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    authUser: authReducer,
    userInfo: userInfo,
    adminInfo: adminInfo
});



const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});
export const persistor = persistStore(store);
export default store;