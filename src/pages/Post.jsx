import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("useeffect");
    const fetchData = async () => {
      if (id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const post = await res.json();
        setPost(post);
        console.log(post);
      }
    };

    fetchData();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="page-title">{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};

export default Post;
