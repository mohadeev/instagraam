import React, { useRef } from "react";
import Style from "../../../../styles/components/body/addpost/components/discard.module.css";
import { useDispatch } from "react-redux";
import {
  ToDescardReducer,
  ToChangeReducer,
} from "../../../../redux/reducers/AddPostReducer/ChangeDirection";

const Discard = () => {
  const CanelRef = useRef();
  const dispatch = useDispatch();
  const HandelCanel = () => {
    CanelRef.current.style.backgroundColor = "#EFEFEF";
    setTimeout(() => {
      CanelRef.current.style.backgroundColor = "";
      dispatch(ToDescardReducer());
    }, 500);
  };
  const DescardDiv = useRef()
  const HandelDiscard = () => {
    DescardDiv.current.style.backgroundColor = "#EFEFEF";
    setTimeout(() => {
      DescardDiv.current.style.backgroundColor = "";
      dispatch(ToDescardReducer());
      dispatch(ToChangeReducer("create"));
    }, 500);
  };

  return (
    <div className={Style.container}>
      <div className={Style.second_container}>
        <div className={Style.discard_text}>
          <p className={Style.p_discard_post}>Discard post?</p>
          <p className={Style.second_p_discard_post}>
            If you leave, your edits won't be saved.
          </p>
        </div>
        <div onClick={HandelDiscard} ref={DescardDiv} className={Style.discard_word_container}>
          <p className={Style.discard_word}>Discard</p>
        </div>
        <div
          ref={CanelRef}
          onClick={HandelCanel}
          className={Style.cencel_container}
        >
          <p className={Style.cancel}>Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default Discard;
