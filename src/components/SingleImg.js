import React, { useState } from "react";

//Components
import CustomModal from "./CustomModal";
const SingleImg = ({ data, index, length }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const handleClick = (data, index) => {
    setCurrentIndex(index);
    setCurrentImg(data.url);
    setCurrentTitle(data.name);
  };

  const handleMoveToLeft = () => {
    //to check if it is the last item
    if (currentIndex + 1 >= length) {
      setCurrentIndex(0);
      setCurrentImg(data[0].url);
      return;
    }

    const newIndex = currentIndex + 1;
    //return an array with the new Img
    const newItem = data.filter((item) => data.indexOf(item) === newIndex);
    console.log(newItem);
    const newImg = newItem[0].url;

    //to set the new index and new img
    setCurrentIndex(newIndex);
    setCurrentImg(newImg);
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
      </div>
      {currentImg && (
        <CustomModal
          currentTitle={currentTitle}
          currentImg={currentImg}
          handleMoveToLeft={handleMoveToLeft}
          index={index}
          length={length}
        />
      )}
    </>
  );
};

export default SingleImg;
