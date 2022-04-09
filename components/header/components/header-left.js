import React from "react";
import Style from "../../../styles/components/header/components/header-left.module.css";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

const HeaderLeft = () => {
  return (
    <div className={Style.conatainer}>
      <p className={Style.logo}>Instaagram</p>
      <form className={Style.form_search}>
        <BsSearch />
        <input className={Style.search_input} placeholder={"Search"} />
      </form>
    </div>
  );
};

export default HeaderLeft;
