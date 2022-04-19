import React from "react";

const SingleImg = ({ data }) => {
  return (
    <div className="col-md-6 mb-3">
      <img src={data.url} key={data.uuid} />
    </div>
  );
};

export default SingleImg;
