import React from 'react'

//redux imports

import { useSelector} from 'react-redux'
//import our selectAllPosts selector
import { selectAllPosts } from './PostsSlice'

//author

import PostAuthor from './PostAuthor'



const PostsList = () => {
    //getting the posts via selector
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
            </p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}


export default PostsList