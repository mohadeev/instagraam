import React from "react";
import Style from "../../../../styles/components/body/addpost/components/create.module.css";
import { MediaIcon } from "../../../Icons/Icons";
import { useDispatch } from "react-redux";
import { AddOneImageReducer } from "../../../../redux/reducers/AddPostReducer/CreatePost";
import { ToChangeReducer } from "../../../../redux/reducers/AddPostReducer/ChangeDirection";

const Create = () => {
  const dispatch = useDispatch();
  const HandelChange = (e) => {
    dispatch(AddOneImageReducer(e.target.files[0]));
    dispatch(ToChangeReducer("upload"))
  };
  return (
    <div className={Style.media_container}>
      <div className={Style.top_container}>
        <p className={Style.create_p}>Create new post</p>
      </div>
      <div className={Style.image_drag_container}>
        {MediaIcon}
        <p className={Style.drag_images}>Drag photos and videos here</p>
        <label className={Style.drag_label} htmlFor="disply">
          <p className={Style.sellect_from_p}> Select from computer</p>
          <input
            onChange={HandelChange}
            style={{ display: "none" }}
            className={Style.input_hidden}
            type="file"
            id="disply"
            name="disply"
          />
        </label>
      </div>
    </div>
  );
};

export default Create;
