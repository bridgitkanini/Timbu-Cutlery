import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import Avatar from "./../assets/images/Avatar.png";

const Navbar = () => {
  const categories = [
    "All",
    "Pots",
    "Plates",
    "Cups",
    "Cutlery",
    "Gadgets",
    "Sets",
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-row mt-10 mb-2 sm:mb-5 gap-14">
        <FiSearch className="text-3xl text-gray-500 block sm:hidden" />
        <div className="flex flex-row gap-2">
          <h1 className="text-3xl font-bold text-gray-500 sm:ml-[600px] ">
            TIMBU
          </h1>
          <div className="hidden sm:flex sm:flex-row gap-2 ml-96 items-center justify-center">
            <img src={Avatar} alt="avatar" />
            <p>Olivia Rhye</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <IoCartOutline className="text-3xl text-gray-500 block sm:hidden" />
          <IoReorderThreeSharp className="text-3xl text-gray-500 block sm:hidden" />
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-row gap-4 items-center justify-center">
        <CiSettings className="text-gray-500 text-3xl" />
        <CiCircleQuestion className="text-gray-500 text-3xl" />
        <div className="bg-gray-100 px-4 py-2 rounded-lg w-[500px] flex flex-row gap-2">
          <FiSearch className="text-gray-500 text-2xl" />
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-gray-100"
          />
        </div>
        <GrFavorite className="text-2xl" />
        <IoCartOutline className="text-2xl" />
      </div>
      <div className="flex flex-row gap-1 sm:gap-16 items-center justify-center my-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-gray-600 bg-gray-100 rounded-lg px-2 py-1 flex flex-row items-center justify-center ${
              activeCategory === category ? "bg-gray-400 text-white" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {activeCategory === category && <FaCheck className="mr-2" />}
            {category}
          </button>
        ))}
      </div>
      <hr className="w-full hidden sm:block" />
    </div>
  );
};

export default Navbar;
