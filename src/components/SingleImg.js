import React, { useState } from "react";

//Components
import CustomModal from "./CustomModal";
const SingleImg = ({ data, index, length }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [allData] = useState(data);
  const handleClick = (data, index) => {
    setCurrentIndex(index);
    setCurrentImg(data.url);
    setCurrentTitle(data.name);
  };

    const handleMoveToLeft = () => {
      //to check if it is the last item
      const totalLength = data.length;
      if (currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        setCurrentImg(data[0].url);
        return;
      }

      const newIndex = currentIndex + 1;
      //return an array with the new Img
      const newItem = data.filter((item) => {
        return data.indexOf(item) === newIndex;
      });

      const newImg = newItem[0].url;

      //to set the new index and new img
      setCurrentIndex(newIndex);
      setCurrentImg(newImg);
    };







    
//   const handleMoveToLeft = () => {
//     const totalLength = allData.length;
//     if (currentIndex + 1 >= totalLength) {
//       setCurrentIndex(0);
//       const newUrl = allData[0].url;
//       setCurrentImg(newUrl);
//       return;
//     }
//     const newIndex = currentIndex + 1;
//     const newUrl = allData.filter((item) => {
//       return allData?.indexOf(item) === newIndex;
//     });
//     const newItem = newUrl[0].url;
//     setCurrentImg(newItem);
//     setCurrentIndex(newIndex);
//   };

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
          setCurrentImg={setCurrentImg}
        />
      )}
    </>
  );
};

export default SingleImg;
