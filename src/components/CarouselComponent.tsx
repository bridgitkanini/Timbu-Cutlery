import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type CarouselProps = {
  images: string[];
};

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: React.SetStateAction<number>) => setCurrentIndex(current),
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[430px] sm:max-w-[700px] overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <button
          className="cursor-pointer"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <IoIosArrowDropleft size={30} className="text-gray-600" />
        </button>
        <button
          className="cursor-pointer"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          <IoIosArrowDropright size={30} className="text-gray-600" />
        </button>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center h-72">
            <img
              src={image}
              alt={`Carousel ${index + 1}`}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;

