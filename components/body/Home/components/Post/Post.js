import React from "react";
import Style from "../../../../../styles/components/body/home/components/post/post.module.css";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import Comment from './Comment';

const Post = ({ Image, PosterImage, Index }) => {
  return (
    <div key={Index} className={Style.container}>
      <div className={Style.poster_details}>
        <div className={Style.poster_image_and_name}>
          <div
            className={Style.user_image}
            style={{ backgroundImage: `url(${PosterImage})` }}
          ></div>
          <p className={Style.username}>User Nanme </p>
        </div>
        <BsThreeDots />
      </div>
      <div
        className={Style.image}
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className={Style.detailes}>
        <Comment />
      </div>
    </div>
  );
};

export default Post;
