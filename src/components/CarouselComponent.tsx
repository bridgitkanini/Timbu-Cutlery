import React, { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type CarouselProps = {
  images: string[];
};

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const buttonContainerStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translateY(-50%)",
  //   left: "50%",
  //   transform: "translateX(-50%)",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   width: "100%",
  // };

  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center relative max-w-[300px] sm:max-w-[1000px] h-[300px] sm:h-[500px]">
        <div className="flex h-full w-full overflow-hidden">
          <div className="flex items-center justify-center">
            <button
              className="-ml-16 sm:pl-[300px] flex justify-between absolute top-1/2 cursor-pointer z-10"
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <MdArrowBackIos
                size={30}
                className="bg-gray-500 rounded-full pl-2 text-white"
              />
            </button>
            <button
              className="pl-[350px] sm:pl-[700px] flex justify-between gap-x-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
              onClick={handleNext}
              disabled={activeIndex === images.length - 1}
            >
              <MdArrowForwardIos
                size={30}
                className="bg-gray-500 rounded-full p-1 text-white"
              />
            </button>
          </div>
          <div
            className="flex h-full"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`w-full flex-shrink-0 ${
                  i === 0 ? "sm:w-[50%] sm:mx-[250px]" : "w-full"
                } overflow-hidden`}
              >
                <img
                  src={img}
                  key={i}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-500 px-3 py-1.5 rounded-full z-10">
          <div className="flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`block h-2 w-2 cursor-pointer rounded-full transition-all duration-700 ease-in-out ${
                  activeIndex === i ? "bg-white" : "bg-gray-700"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
