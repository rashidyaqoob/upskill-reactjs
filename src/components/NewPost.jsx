import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import "./NewPost.css";

function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addPost } = usePosts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ id: Date.now(), title, body, user });
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Title
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Body
          <textarea
            className="form-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Author (User)
          <input
            type="text"
            className="form-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </label>
        <button
          className="form-button"
          type="submit"
          disabled={!title || !body || !user || isSubmitting}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default NewPost;
