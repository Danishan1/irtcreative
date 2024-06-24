import React, { useState, useRef, useEffect } from "react";
import style from "../css/ChatInput.module.css"; // Adjust the path to your CSS file
import { handleKeyDown } from "../helper/handleKeys";
import { adjustTextareaHeight } from "../helper/handleTextAreaHeight";
import PlusButton from "./PlusButton";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showPlus, setShowPlus] = useState(false);
  const [plusClickContent, setPlusClickContent] = useState();
  const textareaRef = useRef(null);
  const addRef = useRef(null);
  const showPlusRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight(textareaRef);
    }
  }, [message]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        addRef.current &&
        !addRef.current.contains(event.target) &&
        showPlusRef.current &&
        !showPlusRef.current.contains(event.target)
      ) {
        setShowPlus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const showPlusClass = showPlus
    ? `${style.showPlus} ${style.show}`
    : style.showPlus;

  return (
    <div className={style.chatInputContainer}>
      <div className={showPlusClass} ref={showPlusRef}>
        <PlusButton setPlusClickContent={setPlusClickContent}/>
      </div>
      <div className={style.add} ref={addRef} onClick={() => setShowPlus(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path fill="black" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
        </svg>
      </div>

      <textarea
        placeholder="Type your message"
        id="adjustableInput"
        ref={textareaRef}
        value={message}
        onChange={handleInputChange}
        onKeyDown={(e) => handleKeyDown(e, setMessage, handleSendMessage)}
        className={style.inputField}
        style={{ resize: "none", overflow: "hidden" }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        onClick={handleSendMessage}
        className={style.sendButton}
      >
        <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
      </svg>
    </div>
  );
};

export default ChatInput;
