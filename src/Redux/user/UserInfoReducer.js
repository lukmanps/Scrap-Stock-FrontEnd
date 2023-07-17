import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: '',
    reducers: {
        addUserInfo: (state, action) => {
            return action.payload
        },
        clearUserInfo: (state, action) => {
            return '';
        }

    }
})

export const {addUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer