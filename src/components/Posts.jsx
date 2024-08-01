import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

function Posts() {
  const { posts } = usePosts();
  const [filter, setFilter] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.user.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Filter posts by title or user..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="input"
      />
      <Link to="/new" className="link-button">
        Create New Post
      </Link>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          {post.title} - {post.body} - {post.user}
          <Link to={`/edit/${post.id}`} className="link-button">
            Edit Post
          </Link>{" "}
          {/* Link to Edit Post */}
        </div>
      ))}
    </div>
  );
}

export default Posts;
