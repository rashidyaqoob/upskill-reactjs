import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./InfiniteScrollComp.css";

const InfiniteScrollComp = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 20 })]);
    }, 1500);
  };
  console.log(items);

  return (
    <div>
      <hr />
      <div id="scrollableDiv" style={{ height: 600, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading more posts...</h4>}
          scrollableTarget="scrollableDiv"
        >
          <div className="grid-container">
            {items.map((_, index) => (
              <div key={index} className="grid-item">
                <img
                  src="https://placehold.co/600x400"
                  alt={`Placeholder ${index + 1}`}
                />
                <div className="post-content">
                  <h3>Post Title #{index + 1}</h3>
                  <p>This is the content of post #{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default InfiniteScrollComp;
