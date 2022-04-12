import React, { useEffect, useState, Children } from "react";
import Style from "../../styles/components/layout/index.module.css";
import AddPost from "../body/addpost/AddPost";
import Header from "../header/header";
import { useSelector } from "react-redux";

const Index = ({ children }) => {
  const [ScreenHeight, setScreenHeight] = useState({});
  const AddPostCondestion = useSelector(
    (state) => state.AddPostReducers.AddPostCondestion
  );
  useEffect(() => {
    const FetchData = () => {
      if (AddPostCondestion) {
        setScreenHeight({
          overflow: "hidden",
          height: `${window.screen.height - 111}px`,
        });
      } else {
        setScreenHeight({});
      }
    };
    FetchData();
  }, [AddPostCondestion]);
  return (
    <main style={ScreenHeight} className={Style.main}>
      {AddPostCondestion && <AddPost />}
      <Header />
      <div className={Style.children}>{children}</div>
    </main>
  );
};

export default Index;
