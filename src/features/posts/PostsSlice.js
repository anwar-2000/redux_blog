import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title : 'A new Way to Learn React',content:'its a very good method ....'},
    {id: 2, title : 'A new Way to Learn Django',content:'its a very good method Too ....'}
];


const postsSlice = createSlice({
    name : 'posts',
    initialState,
    ////////////////////// DOING A PREPARED CALLBACK FOR ADD POST
    reducers : {
        AddPost : {
            reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content,userId){
             return    {
                payload: {
                    id : nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }
    }
    }
});
//a selector that select all posts
export const selectAllPosts = (state) => state.posts;

//aexporting the actions
export const {AddPost} = postsSlice.actions;


export default postsSlice.reducer;