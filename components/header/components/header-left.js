import React from "react";
import Style from "../../../styles/components/header/components/header-left.module.css";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { useRouter } from "next/router";

const HeaderLeft = () => {
  const Routre = useRouter();
const PushToHome=()=>{
  Routre.push("/");
}
  return (
    <div className={Style.conatainer}>
      <p onClick={PushToHome} className={Style.logo}>
        Instaagram
      </p>
      <form className={Style.form_search}>
        <svg
          aria-label="Search"
          class="_8-yf5 "
          color="#8e8e8e"
          fill="#8e8e8e"
          height="16"
          role="img"
          viewBox="0 0 24 24"
          width="16"
        >
          <path
            d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="16.511"
            x2="22"
            y1="16.511"
            y2="22"
          ></line>
        </svg>
        <input className={Style.search_input} placeholder={"Search"} />
      </form>
    </div>
  );
};

export default HeaderLeft;
