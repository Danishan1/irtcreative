import React from "react";
import style from "../css/Gallery.module.css";
import ChatBox from "../../Old/Chat/js/ChatBox";

const Gallery = () => {
  return (
    <>
      <div className={style.gallery}>
        <ChatBox />
      </div>
    </>
  );
};

export default Gallery;
