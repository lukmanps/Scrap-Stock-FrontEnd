import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: '',
    reducers: {
        addUserInfo: (state, action) => {
            return action.payload
        },
        logout: (state, action) => {
            return '';
        }

    }
})

export const {addUserInfo, logout } = userInfoSlice.actions;
export default userInfoSlice.reducer