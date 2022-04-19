import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleImg from "../components/SingleImg";

const Home = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const allImages = await axios.get(
      "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
    );
    setImages(allImages.data);
  };
  useEffect(() => {
    getImages();
  }, []);
  console.log("images", images);
  return (
    <section>
      <div className="container">
        <h1 className="text-center my-5">Gallery</h1>
        <div className="row">
          {images &&
            images.map((data, index) => (
              <SingleImg data={data} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
