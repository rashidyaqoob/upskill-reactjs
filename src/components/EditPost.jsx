import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import "./EditPost.css";

function EditPost() {
  const { id } = useParams();
  const { posts, updatePost } = usePosts();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(id));
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setUser(post.user);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost({ id: parseInt(id), title, body, user });
    navigate("/");
  };

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <label className="edit-label">
        Title
        <input
          type="text"
          className="edit-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="edit-label">
        Body
        <textarea
          className="edit-textarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <label className="edit-label">
        Author (User)
        <input
          type="text"
          className="edit-input"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="edit-button">
        Update Post
      </button>
    </form>
  );
}

export default EditPost;
