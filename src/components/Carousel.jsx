import { useState, createRef } from "react";

const images = [
  "/assets/images/carrusel/img4.webp",
  "/assets/images/carrusel/img2.webp",
  "/assets/images/carrusel/img3.webp",
  "/assets/images/carrusel/img1.webp",
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 h-10 w-10 rounded-full opacity-85 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      aria-label="ver siguiente o anterior entrenador"
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${
        isLeft ? "left-2" : "right-2"
      } bg-amarillo hover:bg-oscuro hover:text-amarillo transition-all duration-300`}
      style={{ top: "40%" }}
    >
      {isLeft ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      )}
    </button>
  );

  return (
    <div className="p-12 flex justify-center w-full md:w-1/2 items-center">
      <div className="relative w-full">
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img
                src={img}
                className="w-full object-contain  h-96"
                alt={`Evolution Gym Pereira Dosquebradas ${i + 1}`}
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
