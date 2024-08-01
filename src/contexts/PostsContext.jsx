import React, { createContext, useContext, useState } from "react";

const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, updatePost }}>
      {children}
    </PostsContext.Provider>
  );
};
