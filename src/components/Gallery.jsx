import galleryData from "../data/galeria.json";
import PropTypes from "prop-types";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const Gallery = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const sede = props.sede;

  return (
    <>
      <h1 className="font-extralight italic text-4xl md:text-6xl my-9 font-roboto w-full text-center">
        GALERIA
      </h1>
      <div className="gallery flex flex-wrap justify-center mt-10 max-sm:flex-col">
        {sede === "cuba"
          ? galleryData.sede1Media.map((item, index) => (
              <div
                key={index}
                className="media-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
              >
                <div
                  className="card h-400 cursor-pointer"
                  onClick={() => handleImageClick(item.src)}
                >
                  {item.type === "photo" ? (
                    <img
                      className="rounded-lg shadow-lg"
                      src={item.src}
                      alt={item.alt}
                    />
                  ) : (
                    <video src={item.src} controls />
                  )}
                </div>
              </div>
            ))
          : galleryData.sede2Media.map((item, index) => (
              <div
                key={index}
                className="media-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
              >
                <div
                  className="card h-400 cursor-pointer"
                  onClick={() => handleImageClick(item.src)}
                >
                  {item.type === "photo" ? (
                    <img
                      className="rounded-lg shadow-lg"
                      src={item.src}
                      alt={item.alt}
                    />
                  ) : (
                    <video src={item.src} controls />
                  )}
                </div>
              </div>
            ))}
        {selectedImage && (
          <div className="z-[5] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[80%] max-sm:h-2/4 max-sm:w-3/4 bg-transparent rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage}
                alt="Gym evolution"
                className="max-w-full max-h-full"
              />
            </div>
            <button
              aria-label="cerrar imagen"
              className="absolute top-4 right-4 rounded-full bg-black p-2 hover:bg-white"
              onClick={() => setSelectedImage(null)}
            >
              <XIcon className="w-5 text-white text-3xl hover:text-amarillo" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

Gallery.propTypes = {
  sede: PropTypes.string.isRequired,
};

export default Gallery;
