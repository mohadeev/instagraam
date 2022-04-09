import React, { useState, useEffect } from "react";
import Style from "../../../styles/components/header/components/header-right.module.css";
import { BsHouseFill } from "@react-icons/all-files/bs/BsHouseFill";
import { BsHouse } from "@react-icons/all-files/bs/BsHouse";
import { BsPlusSquare } from "@react-icons/all-files/bs/BsPlusSquare";
import { BsPlusSquareFill } from "@react-icons/all-files/bs/BsPlusSquareFill";
import { FaRegCompass } from "@react-icons/all-files/fa/FaRegCompass";
import { FaCompass } from "@react-icons/all-files/fa/FaCompass";
import { RiHeartLine } from "@react-icons/all-files//ri/RiHeartLine";
import { RiHeartFill } from "@react-icons/all-files//ri/RiHeartFill";
import { SendOutLine, SendFill } from "./custtomicons.js";
import { RiUser6Fill } from "@react-icons/all-files/ri/RiUser6Fill";
const HeaderRight = () => {
  const [ArrayIcons, setArrayIcons] = useState("BsHouseFill");
  //   useEffect(() => {
  //     alert(ArrayIcons);
  //   });
  const BsHouseFun = () => {
    setArrayIcons("BsHouseFill");
  };

  const SendFun = () => {
    setArrayIcons("SendFill");
  };
  const PlusSquareFunc = () => {
    setArrayIcons("BsPlusSquareFill");
  };
  const RegCompassFunc = () => {
    setArrayIcons("FaRegCompass");
  };
  const HeartFunc = () => {
    setArrayIcons("RiHeartFill");
  };
  return (
    <div className={Style.container}>
      {ArrayIcons === "BsHouseFill" ? (
        <BsHouseFill />
      ) : (
        <BsHouse onClick={BsHouseFun} />
      )}
      {ArrayIcons === "SendFill" ? (
        <span onClick={SendFun}>{SendFill}</span>
      ) : (
        <span onClick={SendFun}>{SendOutLine}</span>
      )}
      {ArrayIcons === "BsPlusSquareFill" ? (
        <BsPlusSquareFill />
      ) : (
        <BsPlusSquare onClick={PlusSquareFunc} />
      )}
      {ArrayIcons === "FaRegCompass" ? (
        <FaCompass />
      ) : (
        <FaRegCompass onClick={RegCompassFunc} />
      )}
      {ArrayIcons === "RiHeartFill" ? (
        <RiHeartFill />
      ) : (
        <RiHeartLine onClick={HeartFunc} />
      )}

      <RiUser6Fill />
    </div>
  );
};

export default HeaderRight;
