import CarouselComponent from "./CarouselComponent";
import Carousel1 from "./../assets/images/Carousel image 1.png";
import Carousel2 from "./../assets/images/Carousel image 2.png";
import Carousel3 from "./../assets/images/Carousel image 3.png";


const HomeCarousel = () => (
  <CarouselComponent images={[Carousel1, Carousel2, Carousel3]} />
);


export default HomeCarousel
