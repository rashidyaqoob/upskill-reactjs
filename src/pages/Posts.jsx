import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Posts = ({ data }) => {
  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {data?.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-header">{item.title}</div>
            <div className="card-body">
              <div className="card-preview-text">{item.body}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`/posts/${item.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
