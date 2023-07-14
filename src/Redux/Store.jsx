import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthReducer';
import userInfo from './UserInfoReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        userInfo: userInfo
    }
})

export default store;