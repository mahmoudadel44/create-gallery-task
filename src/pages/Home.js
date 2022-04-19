import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <div className="row">
          {images.map((data) => (
            <div className="col-md-6 mb-3">
              <img src={data.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
