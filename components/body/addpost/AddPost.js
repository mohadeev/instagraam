import React, { useState } from "react";
import Style from "../../../styles/components/body/addpost/addpost.module.css";
import { DeleteIcon } from "../../Icons/Icons";
import { useDispatch } from "react-redux";
import { AddPostReducer } from "../../../redux/reducers/AddPostReducer";
import Create from "./components/Create";
import { useSelector } from "react-redux";
import Upload from "./components/Upload";
import Discard from "./components/Discard";

const AddPost = () => {
  const ImageArray = useSelector((state) => state.AddImagesReducer.Images);
  const Direction = useSelector((state) => state.ChangeDirection.direction);
  const Discardvar = useSelector((state) => state.ChangeDirection.discardvar);

  const dispatch = useDispatch();
  const DeleteAddPostFunc = () => {
    if (Direction === "create") {
      dispatch(AddPostReducer());
    } else if (Direction !== "create") {
      Direction === "create";
    }
  };
  return (
    <div className={Style.container}>
      {(() => {
        if (Direction === "create") {
          return <Create />;
        } else if (Direction === "upload") {
          return <Upload />;
        }
      })()}

      <span onClick={DeleteAddPostFunc} className={Style.delete_icon}>
        {DeleteIcon}
      </span>
      {Discardvar === true && <Discard />}
    </div>
  );
};

export default AddPost;
