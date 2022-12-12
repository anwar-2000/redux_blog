import { configureStore } from "@reduxjs/toolkit";
//importing the reducer of posts
import postReducer from '../features/posts/PostsSlice'
//import reducer of users
import usersReducer from '../features/users/UsersSlice'

export const Store = configureStore({
    reducer : {
        posts : postReducer,
        users : usersReducer
    }
})