import React, { Children } from "react";
import Style from "../../styles/components/layout/index.module.css";
import Header from "../header/header";

const Index = ({ children }) => {
  return (
    <main className={Style.main}>
      <Header />
      {children}
    </main>
  );
};

export default Index;
