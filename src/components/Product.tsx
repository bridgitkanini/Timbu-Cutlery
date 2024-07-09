import { IoStar } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import MoreItems from "./../assets/images/More items.png";
import MoreItemsMobile from "./../assets/images/More Items Mobile.png";
import ReviewsMobile from "./../assets/images/Reviews Mobile.png";
import Review1 from "./../assets/images/Reviews 1.png";
import Review2 from "./../assets/images/Reviews 2.png";
import Review3 from "./../assets/images/Reviews 3.png";
import ProductCarousel from "./ProductCarousel";

const Product = () => {
  return (
    <div id="product">
      <div className="max-w-[430px] md:max-w-[1440px] m-5 flex flex-col gap-4 justify-center">
        <ProductCarousel />
        <hr className="sm:w-[1280px] hidden sm:block" />
        <div className="flex flex-col justify-start ml-5 sm:ml-10">
          <p className="text-3xl font-bold">£100.99</p>
          <p className="text-xl">Stainless Steel Frying Pan</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-row gap-1 mt-5">
              <IoStar className="text-black" />
              <IoStar className="text-black" />
              <IoStar className="text-black" />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </div>
            <div className="flex flex-row my-4 -ml-10">
              <button className="flex flex-row items-center justify-center px-20 py-1 gap-2 border-t border-b border-gray-300 sm:border-none">
                Color <IoIosArrowDown />
              </button>

              <button className="flex flex-row items-center justify-center px-20 py-1 gap-2 border-l border-t border-b border-gray-300 sm:border-none">
                Quantity <IoIosArrowDown />
              </button>
            </div>
            <div className="flex flex-row gap-20">
              <button className="sm:hidden flex flex-col items-center justify-center">
                <GrFavorite className="text-xl" /> Save for Later
              </button>
              <Link to="/cart">
                <button className="bg-violet-950 rounded-lg py-2 px-10 text-white text-xl">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
          <hr className="text-gray-300 w-[430px] sm:w-[1280px] -ml-10 mt-4" />
          <div className="flex flex-col gap-4 my-8">
            <p className="text-xl font-bold">Product Details</p>
            <p>Professional Stainless Steel Frying Pan</p>
            <p>28cm </p>
            <p>
              The ProCook Professional Stainless Steel 28cm frying pan is a
              perfect pan for all your frying tasks.
              <br />
              Featuring our 5 Star Plus triple layer, PFAS-free non-stick
              ceramic coating, you can cook with little <br /> oil without the
              risk of sticking or burning.
            </p>
          </div>
          <hr className="text-gray-300 w-[430px] sm:w-[1280px] -ml-10 mb-4" />
          <p className="text-xl font-bold">Return Policy</p>
          <hr className="text-gray-300 w-[430px] sm:w-[1280px] -ml-10 mt-4" />
          <div className="flex flex-col gap-4 my-4">
            <p className="text-xl">More from TIMBU</p>
            <img src={MoreItems} alt="more items" className="hidden sm:block" />
            <img
              src={MoreItemsMobile}
              alt="more items"
              className="block sm:hidden"
            />
          </div>
          <div className="flex flex-row justify-between my-4">
            <p className="sm:font-bold">Reviews 2.9/5 (3)</p>
            <p className="underline">See All</p>
          </div>
          <img
            src={ReviewsMobile}
            alt="reviews"
            className="block sm:hidden mb-20"
          />
          <img src={Review1} alt="reviews" className="hidden sm:block mb-20" />
          <img src={Review2} alt="reviews" className="hidden sm:block mb-20" />
          <img src={Review3} alt="reviews" className="hidden sm:block mb-20" />
          <img src={Review1} alt="reviews" className="hidden sm:block mb-20" />
          <img src={Review2} alt="reviews" className="hidden sm:block mb-20" />
        </div>
      </div>
    </div>
  );
};

export default Product;
