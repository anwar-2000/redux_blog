import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"; // nano id generate a random id
import { AddPost, selectAllPosts } from "./PostsSlice";
import { SelectAllUsers } from "../users/UsersSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  /////////////logic for users
  const users = useSelector(SelectAllUsers)
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  //function to submit data
  const onSaveHandler = () => {
    if (title && content) {
      dispatch(
        AddPost(title, content,userId) /////////////ACCESING THE PREPARED CALLBACK FROM THE POSTS SLICE
        );

      setTitle("");
      setContent("");
    }
  };

  //////////////checking for true inputs
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  //user options //////////////////
  const userOptions = users.map((user)=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="author">Author:</label>
        <select id="author" value={userId} onChange={onAuthorChanged}>
             <option value=""></option>
            {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button disabled={!canSave} type="button" onClick={onSaveHandler}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
