import { createSlice, nanoid } from "@reduxjs/toolkit";
//the date-fns npm package usage

import {sub} from 'date-fns'
 


const initialState = [
    {id: 1,
         title : 'A new Way to Learn React',
         content:'its a very good method ....',
         date : sub(new Date(),{minutes : 10 }).toISOString(),
         reactions : {
            thumbsUp : 0,
            wow:0,
            heart : 0,
            rocket : 0,
            cofee : 0
                }
        
        }
    ,
    {id: 2,
         title : 'A new Way to Learn Django',
         content:'its a very good method Too ....',
         date : sub(new Date(),{minutes : 5}).toISOString(),
         reactions : {
            thumbsUp : 0,
            wow:0,
            heart : 0,
            rocket : 0,
            cofee : 0
                }}
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
                    date : new Date().toISOString(),
                    userId,
                    reactions : {
                        thumbsUp : 0,
                        wow:0,
                        heart : 0,
                        rocket : 0,
                        cofee : 0
                            }
                }
            }
        }
    },
    //second reducer
        reactionAdded(state,action){
            const {postId,reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
});
//a selector that select all posts
export const selectAllPosts = (state) => state.posts;

//aexporting the actions
export const {AddPost , reactionAdded} = postsSlice.actions;


export default postsSlice.reducer;