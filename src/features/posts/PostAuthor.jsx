import { useSelector } from "react-redux";
import { SelectAllUsers } from "../users/UsersSlice";

import React from 'react'

const PostAuthor = (props) => {
    const users = useSelector(SelectAllUsers);

    const author = users.find(user => user.id === props.userId);

    return <span>by {author ? author.name : 'unknown Author'}</span>
}

export default PostAuthor;