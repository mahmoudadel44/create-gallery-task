import React, { useState } from "react";

//Css
import "../styles/customModal.css";

const CustomModal = ({
  currentImg,
  handleMoveToLeft,
  index,
  length,
  currentTitle,
}) => {
  const [show, setShow] = useState(true);
  const hideModal = () => {
    setShow(false);
  };

  console.log("length", length);
  return (
    <div className="overlay" onClick={hideModal}>
      <img src={currentImg} alt="currentimg" />
      <h1 onClick={hideModal}>&times;</h1>
      <div></div>

      <h1>
        image {index + 1} of {length}
      </h1>
      <h1>{currentTitle}</h1>

    </div>
  );
};

export default CustomModal;
