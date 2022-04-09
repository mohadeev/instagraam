import React from "react";
import Style from "../../../../../styles/components/body/home/components/post/commentinput.module.css";
import { Emojy } from "../../../../Icons/Icons";

const CommentInput = () => {
  return (
    <div className={Style.container}>
        {Emojy}
      <textarea
        placeholder="Add a comment..."
        className={Style.textarea}
      ></textarea>

      <p className={Style.post}>Post</p>
    </div>
  );
};

export default CommentInput;
