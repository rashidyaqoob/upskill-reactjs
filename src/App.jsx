import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import { PostsProvider } from "./contexts/PostsContext";
import "./components/Form.css";
import Post from "./components/Post";

function App() {
  return (
    <PostsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
}

export default App;
