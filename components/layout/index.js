import React, { useEffect, useState, Children } from "react";
import Style from "../../styles/components/layout/index.module.css";
import AddPost from "../body/addpost/AddPost";
import Header from "../header/header";
import { useSelector } from "react-redux";
import Login from "./../login/Login";
import { useRouter } from "next/router";
import UserFech from './UserFech';
const Index = ({ children }) => {
  const Router = useRouter();
  const { asPath } = useRouter();
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
    <>

      <main style={ScreenHeight} className={Style.main}>
        <UserFech />
        {AddPostCondestion && <AddPost />}
        <Header />
        <div className={Style.children}>{children}</div>
      </main>
    </>
  );
};

export default Index;
