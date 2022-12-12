import { createSlice } from "@reduxjs/toolkit";

    const initialState = [
        {id:1,name:'Anwar'},
        {id:2,name:'Khaled'},
        {id:3,name:'Mohammed'},
    ]

const userSlice = createSlice({
        name:'users',
        initialState,
        reducers : {

        }
})

export const SelectAllUsers = state => state.users;


export default userSlice.reducer;