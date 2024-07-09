import CarouselComponent from "./CarouselComponent";
import Carousel1 from "./../assets/images/Carousel image 1.png";
import Carousel2 from "./../assets/images/Carousel image 2.png";
import Carousel3 from "./../assets/images/Carousel image 3.png";
import Tag from './../assets/images/Tag.png';


const HomeCarousel = () => (
  <div className="relative">
    <img
      src={Tag}
      alt="tag"
      className="absolute top-[120px] left-[-50px] sm:top-[200px] sm:left-[70px] sm:w-[15%] z-10"
    />
    <CarouselComponent images={[Carousel1, Carousel2, Carousel3]} />
  </div>
);


export default HomeCarousel
