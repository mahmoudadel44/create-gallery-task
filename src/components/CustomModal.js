import React, { useState } from "react";

//comppnents
import Arrows from "./Arrows";
import "../styles/Arrows.css";

//Css
import "../styles/customModal.css";

const CustomModal = ({
  currentImg,
  handleMoveToRight,
  handleMoveToLeft,
  index,
  length,
  currentTitle,
  setCurrentImg,
}) => {
  const hideModal = (e) => {
    if (e.target.classList.contains("hide")) {
      setCurrentImg(null);
    }
  };

  console.log("length", length);
  return (
    <>
      <div className="overlay hide" onClick={hideModal}>
        <div className="inernalOverlay">
          <div className="imgContainer">
            <img src={currentImg} alt="currentimg" />
            <div className="titleContainer">
              <span className="text-center text-white">{currentTitle}</span>
            </div>
          </div>
          <div className="imagesNumber mb-5">
            <span className="text-white">
              image {index + 1} / {length}
            </span>
          </div>
          <Arrows
            handleMoveToRight={handleMoveToRight}
            handleMoveToLeft={handleMoveToLeft}
          />
        </div>
      </div>
    </>
  );
};

export default CustomModal;
