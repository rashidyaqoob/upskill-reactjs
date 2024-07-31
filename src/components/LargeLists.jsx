import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import "./LargeLists.css";

const LargeLists = ({ items }) => {
  const parentRef = React.useRef();

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} className="virtual-list-container">
      <div
        className="virtual-list-inner"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            ref={virtualRow.measureRef}
            className="virtual-row"
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <span>{items[virtualRow.index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LargeLists;
