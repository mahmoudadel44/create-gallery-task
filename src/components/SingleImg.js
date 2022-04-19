import React, { useState } from "react";

//Components
import CustomModal from "./CustomModal";

const SingleImg = ({ data, index }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(null);
  const handleClick = (data, index) => {
    setCurrentIndex(index);
    setCurrentImg(data.url);
  };

  return (
    <>
      <div className="col-md-6 mb-3">
        <img
          src={data.url}
          key={index}
          alt="singleimg"
          onClick={() => {
            handleClick(data, index);
            handleShow();
          }}
        />
        {/* <h3>{`image number ${index} of ${data.length}`}</h3> */}
      </div>

      <CustomModal show={show} handleClose={handleClose} />
    </>
  );
};

export default SingleImg;
