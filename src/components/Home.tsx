import { IoIosArrowDown } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import CarouselImage from "./../assets/images/Carousel image.png";
import Cards from "./Cards.tsx";
import PaginationList from "./../assets/images/Pagination List.png";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const Home = () => {
  const filters = ["Heavy Duty", "Black", "Stainless Steel"];

  return (
    <>
      <div className="max-w-[430px] md:max-w-[1440px] m-auto flex flex-col gap-4 items-center justify-center">
        <div className="hidden sm:flex sm:flex-row text-xl gap-10 my-4">
          <button className="flex flex-row items-center justify-center bg-gray-100 rounded-md px-3 py-1 gap-2">
            Sort <IoIosArrowDown className="text-xl" />
          </button>
          <button className="flex flex-row items-center justify-center bg-gray-100 rounded-md px-3 py-1 gap-2">
            Filter <IoIosArrowDown className="text-xl" />
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-row text-sm gap-2">
          {filters.map((filter) => (
            <button className="flex flex-row items-center justify-center gap-1 border border-gray-300 rounded-md px-2 py-1">
              {filter} <IoIosClose className="text-xl text-gray-500" />
            </button>
          ))}
        </div>
        <img src={CarouselImage} alt="image" className="w-full sm:w-2/3" />
        <Cards className="grid grid-cols-2 sm:grid-cols-3 gap-5" />
        <hr className="w-full hidden sm:block" />
        <div className="flex flex-row gap-[450px]">
          <p className="hidden sm:flex flex-row items-center justify-center"><IoMdArrowBack /> Previous</p>
          <img src={PaginationList} alt="pagination"/>
          <p className="hidden sm:flex flex-row items-center justify-center">Next <IoMdArrowForward /></p>
        </div>
      </div>
    </>
  );
};

export default Home;
