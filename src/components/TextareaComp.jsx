import { useEffect, useRef, useState } from "react";
import "./TextareaComp.css";

export default function TextareaComp() {
  const textAreaRef = useRef(null);
  const [value, setValue] = useState("Lorem Ipsum is simply dummy text...");
  const [textChunks, setTextChunks] = useState([]);
  const addValue = "Lorem Ipsum is simply dummy text...";

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);

    return () => {
      window.removeEventListener("resize", resizeTextArea);
    };
  }, [value]);

  const handleAddText = () => {
    setTextChunks((prevChunks) => {
      const newChunks = [...prevChunks, addValue];
      setValue(newChunks.join(""));
      return newChunks;
    });
  };

  const handleRemoveText = () => {
    setTextChunks((prevChunks) => {
      const newChunks = prevChunks.slice(0, -1);
      setValue(newChunks.join(""));
      return newChunks;
    });
  };

  return (
    <div className="textarea-container">
      <h2 className="title">Text Area Exercise</h2>
      <div className="button-container">
        <button className="fancy-button" onClick={handleAddText}>
          Add Text
        </button>
        {textChunks.length > 0 && (
          <button className="fancy-button" onClick={handleRemoveText}>
            Remove Text
          </button>
        )}
      </div>
      <textarea
        className="textarea"
        value={value}
        readOnly
        rows={10}
        cols={50}
        ref={textAreaRef}
      ></textarea>
    </div>
  );
}
