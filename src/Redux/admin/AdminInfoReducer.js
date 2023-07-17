import { createSlice } from "@reduxjs/toolkit";

export const adminInfoSlice = createSlice({
    name: 'adminInfo',
    initialState: '',
    reducers: {
        isAdmin: (state, action) =>{
            return action.payload
        },
        logout: (state, action) => {
            return '';
        }
    }

})

export const {isAdmin, logout} = adminInfoSlice.actions;
export default adminInfoSlice.reducer;