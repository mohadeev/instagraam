import React from "react";
import Reels from "./components/Reel/Reels";
import Style from "../../../styles/components/body/home/home.module.css";
import Posts from './components/Post/Posts';
const Home = () => {
  return (
    <div className={Style.main}>
      <Reels />
      <Posts />
    </div>
  );
};

export default Home;
