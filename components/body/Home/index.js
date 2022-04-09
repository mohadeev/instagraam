import React from "react";
import Reels from "./components/Reel/Reels";
import Style from "../../../styles/components/body/home/home.module.css";
import Posts from "./components/Post/Posts";
import Sidebar from "./components/SideBar/Sidebar";
const Home = () => {
  return (
    <div className={Style.main}>
      <div className={Style.container}>
        <Reels />
        <Posts />
      </div>
      <div className={Style.second_container}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
