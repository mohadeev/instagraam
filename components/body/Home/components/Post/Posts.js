import React, { useState, useEffect } from "react";
import Post from "./Post";
import Style from "../../../../../styles/components/body/home/components/post/posts.module.css";

const Posts = () => {
  const [PostsArray, setPostsArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // await fetch("https://jsonplaceholder.typicode.com/photos").then(
      //   async (res) => {
      //     const data = await res.json();
      //     setPostsArray(data);
      //   }
      // );
    };
    fetchData();
  }, []);
  return (
    <div className={Style.container}>
      {/* {PostsArray.map(({ url }, index) => (
        <Post Image={url} PosterImage={url} Index={index} key={index} />
      ))} */}
      <Post
        Image={"./images/users/user-1-image.jpg"}
        PosterImage={"./images/users/user-1-image.jpg"}
      />
      <Post
        Image={"./images/users/user-1-image.jpg"}
        PosterImage={"./images/users/user-1-image.jpg"}
      />
      <Post
        Image={"./images/users/user-1-image.jpg"}
        PosterImage={"./images/users/user-1-image.jpg"}
      />
      <Post
        Image={"./images/users/user-1-image.jpg"}
        PosterImage={"./images/users/user-1-image.jpg"}
      />
    </div>
  );
};

export default Posts;
