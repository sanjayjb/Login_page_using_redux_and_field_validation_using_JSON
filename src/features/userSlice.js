import { createSlice } from '@reduxjs/toolkit'
import jsonFile from './loginCreds.json';
import dashBoardContents from './dashBoardContents.json'


export const userSlice = createSlice({
    name: "username",
    initialState:{
        user: null,
        data: null
    },
    reducers:{
        login: (state, action) => {
            if(action.payload.username == jsonFile.username && action.payload.password == jsonFile.password)
            {
                state.user = action.payload;
                state.data = dashBoardContents;
            }
            else
            {
                window.alert("enter correct credentials");  
            }
        },
        logout: (state) => {
            state.user = null
        },
    },
})

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;