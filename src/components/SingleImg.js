import React, { useState } from "react";

//Components
import CustomModal from "./CustomModal";
const SingleImg = ({ data, index }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(null);
  const handleClick = (data, index) => {
    setCurrentIndex(index);
    setCurrentImg(data.url);
  };

  const handleMoveToRight = () => {
    const length = data.length;

    //to check if it is the last item
    if (currentIndex + 1 >= length) {
      setCurrentIndex(0);
      setCurrentImg(data[0].url);
      return;
    }
    
    const newIndex = currentIndex + 1;
    //return an array with the new Img
    const newImg = data.filter((item) => data.indexOf(item) === newIndex);
    const newItem = newImg[0].url;

    //to set the new index and new img
    setCurrentIndex(newIndex);
    setCurrentImg(newItem);
  };

  return (
    <>
      <div className="col-md-6 mb-3">
        <div>
          <img
            src={data.url}
            key={index}
            alt="singleimg"
            onClick={() => {
              handleClick(data, index);
            }}
          />
        </div>
        {/* <h3>{`image number ${index} of ${data.length}`}</h3> */}
      </div>
      {currentImg && (
        <CustomModal
          currentImg={currentImg}
          handleMoveToRight={handleMoveToRight}
        />
      )}
    </>
  );
};

export default SingleImg;
