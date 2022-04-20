import React, { useEffect, useState } from "react";
import axios from "axios";

//Components
import SingleImg from "../components/SingleImg";
import CustomModal from "../components/CustomModal";

const Home = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [img, setCurrentImg] = useState(null);

  const getImages = async () => {
    const allImages = await axios.get(
      "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
    );
    setImages(allImages.data);
  };
  
  useEffect(() => {
    getImages();
  }, []);

  return (
    <section>
      <div className="container">
        <h1 className="text-center my-5">Gallery</h1>
        <div className="row">
          {images &&
            images.map((data) => (
              <SingleImg
                data={data}
                key={data.uuid}
                handleClick={() => {
                  setShowModal(true);
                  setCurrentImg(data);
                }}
              />
            ))}
        </div>
        {showModal && (
          <CustomModal
            currentImg={img}
            data={images}
            onClose={setShowModal}
            setCurrentImg={setCurrentImg}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
