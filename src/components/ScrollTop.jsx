import React, { useState, useRef } from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const messagesTopRef = useRef(null);

  const addMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      `This is message ${prevMessages.length + 1}`,
    ]);

    setTimeout(() => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const removeMessage = () => {
    setMessages((prevMessages) => prevMessages.slice(0, -1));
    setTimeout(() => {
      messagesTopRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToTop = () => {
    messagesTopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={addMessage}>Add Message</button>
        <button onClick={removeMessage}>Remove Message</button>
        <button onClick={scrollToTop}>Scroll to Top</button>
        <button onClick={scrollToBottom}>Scroll to Bottom</button>
      </div>

      <div className="messages-container">
        <div ref={messagesTopRef}></div>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
    </div>
  );
};

export default ScrollTop;
