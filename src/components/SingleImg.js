import React from "react";

//Components
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from "react-image-magnifiers";

//Css
import "../styles/customModal.css";

const SingleImg = ({ data, handleClick }) => {
  return (
    <>
      <div className="col-md-6 mb-3">
        <div
          onClick={handleClick}
          className="singleImgContainer"
          key={data.uuid}
        >
          <MagnifierContainer>
            <div className="example-class">
              <MagnifierPreview imageSrc={data?.url} />
            </div>
            <MagnifierZoom
              style={{
                height: "150px",
                width: "42%",
                margin: "auto",
                position: "absolute",
                zIndex: 10,
              }}
              imageSrc={data?.url}
            />
          </MagnifierContainer>
        </div>
      </div>
    </>
  );
};

export default SingleImg;
