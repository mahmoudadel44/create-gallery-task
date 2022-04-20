import React from "react";

//Css
import "../styles/customModal.css"

const SingleImg = ({ data, handleClick }) => {
  return (
    <>
      <div className="col-md-6 mb-3">
        <div onClick={handleClick} className="singleImgContainer">
          <img src={data?.url} key={data.uuid} alt="singleimg" />
        </div>
      </div>
    </>
  );
};

export default SingleImg;
