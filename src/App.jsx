import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import Post from "./pages/Post";
import User from "./pages/User";

const URLS = {
  posts: "https://jsonplaceholder.typicode.com/posts",
  users: "https://jsonplaceholder.typicode.com/users",
  todos: "https://jsonplaceholder.typicode.com/todos",
};

const App = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fectchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fectchData();
  }, [url]);

  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/posts" onClick={() => setUrl(URLS.posts)}>
              Posts
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={() => setUrl(URLS.users)}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/todos" onClick={() => setUrl(URLS.todos)}>
              Todos
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/posts" element={<Posts data={data} />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/users" element={<Users data={data} />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/todos" element={<Todos data={data} />} />
      </Routes>

      {/* <RoutesForPages /> */}
    </div>
  );
};

export default App;
