import React from "react";

//Css
import "../styles/Arrows.css";

const Arrows = ({ handleMoveToRight, handleMoveToLeft }) => {
  return (
    <>
      <div className="arrowLeft" onClick={handleMoveToLeft}>
        <div className="text-white">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
      </div>
      <div className="arrowRight">
        <div className="text-white">
          <i class="fa-solid fa-chevron-right" onClick={handleMoveToRight}></i>
        </div>
      </div>
    </>
  );
};

export default Arrows;
