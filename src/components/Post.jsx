import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

function Post() {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Author: {post.user}</p>
      <Link to={`/edit/${post.id}`} className="link-button">
        Edit Post
      </Link>
    </div>
  );
}

export default Post;
