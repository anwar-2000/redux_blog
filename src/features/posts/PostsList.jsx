import React from 'react'

//redux imports

import { useSelector} from 'react-redux'
//import our selectAllPosts selector
import { selectAllPosts } from './PostsSlice'

//author

import PostAuthor from './PostAuthor'

//importing time Ago compo....
import TimeAgo from './TimeAgo'

/////importing reacions buttons


import ReactionButtons from './ReactionButtons'



const PostsList = () => {
    //getting the posts via selector
    const posts = useSelector(selectAllPosts);

    //sorting the posts by date
    /////////////// localcompare retuens 1 0 or -1 based on the resuslts of comaparaison between the 2 objects dates
    const sortedposts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))


    const renderedPosts = sortedposts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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