import React from "react";

import Style from "../../../../../styles/components/body/home/components/post/comment.module.css";
import {
  CommentsOutLine,
  HeartOutline,
  SendOutLine,
  BookPage,
} from "../../../../Icons/Icons";
import CommentInput from "./CommentInput";

const Comment = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.icons_container}>
          <div className={Style.first_icons}>
            {HeartOutline}
            {CommentsOutLine}
            {SendOutLine}
          </div>
          <div className={Style.last_icon}>{BookPage}</div>
        </div>
        <div className={Style.likes_container}>
          <p className={Style.p_likes}>615,381 likes</p>
          <p className={Style.last_comment_user}>
            <small className={Style.username_commnent}>lasteuser {" "}</small> 
            <small className={Style.last_comment}>
              Winston (@winston_britishboy) is all about his regular, post-lunch
              cat nap. “He loves sleeping on any hard surfaces and...{" "}
              <small className={Style.last_comment_more}>more</small>
            </small>
          </p>
          <small className={Style.last_comment_more}>view all 14 coments</small>
          <small className={Style.time_stamp}>1 HOUR AGO</small>
        </div>
      </div>
      <CommentInput />
    </>
  );
};

export default Comment;
