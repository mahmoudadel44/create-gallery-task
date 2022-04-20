import React from "react";

//comppnents
import Arrows from "./Arrows";

//Css
import "../styles/customModal.css";

const CustomModal = ({ currentImg, data, onClose, setCurrentImg }) => {
  //to get the current index of currentImg
  const currentIndex = data.findIndex((e) => e.uuid === currentImg.uuid);

  const handleMoveToRight = () => {
    //to check if it is the last item
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      //return to the first item
      setCurrentImg(data[0]);
      return;
    }
    //move one steb to forward
    setCurrentImg(data[currentIndex + 1]);
  };

  /////////////////////////////////////////////////////////////////////

  const handleMoveToLeft = () => {
    //to check if it is the first item
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentImg(data[totalLength - 1]);
    } else {
      //move one step to backward
      setCurrentImg(data[currentIndex - 1]);
    }
  };

  const hideModal = (e) => {
    if (e.target.classList.contains("hide")) {
      onClose(false);
    }
  };

  return (
    <>
      <div className="overlay hide" onClick={hideModal}>
        <div className="inernalOverlay">
          <span className="close hide" onClick={hideModal}>
            &times;
          </span>
          <div className="imgContainer">
            <img src={currentImg?.url} alt="currentimg" />
            <div className="titleContainer">
              <span className="text-center text-white">{currentImg?.name}</span>
            </div>
          </div>
          <div className="imagesNumber mb-4 mt-3">
            <span className="text-white">
              image {currentIndex + 1} / {data?.length}
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
