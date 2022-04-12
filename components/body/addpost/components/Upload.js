import React, { useState, useRef, useEffect } from "react";
import Style from "../../../../styles/components/body/addpost/components/upload.module.css";
import { ArrowBack } from "../../../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  
  ToDescardReducer,
} from "../../../../redux/reducers/AddPostReducer/ChangeDirection";

const Upload = () => {
  const dispatch = useDispatch();
  const ImageArray = useSelector((state) => state.AddImagesReducer.Images);
  const BagDivIgm = useRef();
  const SlideBg = useRef();
  const [SlideBgWith, setSlideBgWith] = useState({});
  const [Laodeded, setLaodeded] = useState(true);

  useEffect(() => {
    const HandelChange = () => {
      if (ImageArray.length !== 0) {
        const Item = ImageArray.map((item) => item);
        BagDivIgm.current.style.backgroundImage = `url(${URL.createObjectURL(
          ImageArray[0]
        )})`;
        setTimeout(() => {
          setLaodeded(false);
        }, 500);
      }
    };
    HandelChange();
  }, [ImageArray]);
  const HandelDirection = ()=>{
    dispatch(ToDescardReducer());
  }

  return (
    <div className={Style.media_container}>
      <div className={Style.top_container}>
        <span onClick={HandelDirection}>{ArrowBack}</span>
        <p className={Style.crop_p}>Crop</p>
        <p className={Style.next_p}>Next</p>
      </div>

      <div ref={BagDivIgm} className={Style.image_drag_container}>
        {Laodeded && <div ref={SlideBg} className={Style.loaded_bg}></div>}
      </div>
    </div>
  );
};

export default Upload;
