import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'user',
    initialState: ' ', //stores accessToken as state
    reducers: {
        isUser: (state, action) => {
            return action.payload;
        },
        logout: (state, action) => {
            return false;
        }
    }
})


export const {isUser, logout} = authSlice.actions;
export default authSlice.reducer;