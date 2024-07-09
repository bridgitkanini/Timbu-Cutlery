import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline, IoReorderThreeSharp } from "react-icons/io5";
import { CiSettings, CiCircleQuestion } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Avatar from "./../assets/images/Avatar.png";
import Menu from "./../assets/images/Menu.png";

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
  const [showMenu, setShowMenu] = React.useState(false);
  const [showReorderMenu, setShowReorderMenu] = React.useState(false);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleAvatarClick = () => {
    setShowMenu(!showMenu);
    if (showReorderMenu) setShowReorderMenu(false);
  };

  const handleReorderClick = () => {
    setShowReorderMenu(!showReorderMenu);
    if (showMenu) setShowMenu(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row mt-10 mb-2 sm:mb-5 gap-14">
        <FiSearch className="text-3xl text-gray-500 block sm:hidden" />
        <div
          className={`flex flex-row gap-2 cursor-pointer`}
          onClick={handleAvatarClick}
        >
          <Link to="/">
            <button>
              <h1 className="text-3xl font-bold text-gray-600 sm:ml-[600px]">
                TIMBU
              </h1>
            </button>
          </Link>
          <div className="hidden sm:flex sm:flex-row gap-2 ml-96 items-center justify-center">
            <img src={Avatar} alt="avatar" />
            <p>Olivia Rhye</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Link to="/cart">
            <button>
              <IoCartOutline className="text-3xl text-gray-500 block sm:hidden" />
            </button>
          </Link>
          <IoReorderThreeSharp
            className="text-3xl text-gray-500 block sm:hidden cursor-pointer"
            onClick={handleReorderClick}
          />
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
            className="bg-gray-100 w-full focus:outline-none"
          />
        </div>
        <GrFavorite className="text-2xl" />
        <Link to="/cart">
          <button>
            <IoCartOutline className="text-2xl" />
          </button>
        </Link>
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
      {showMenu && (
        <div
          className="fixed top-0 right-0 mt-16 mr-4 p-4 shadow-lg rounded-lg z-20 w-56 h-[450px] "
          onClick={() => setShowMenu(false)}
        >
          <img src={Menu} alt="menu" className="w-full h-full object-cover" />
        </div>
      )}
      {showReorderMenu && (
        <div
         className="fixed top-0 right-0 mt-16 mr-4 p-4 shadow-lg rounded-lg z-20 w-56 h-[450px] "
          onClick={() => setShowReorderMenu(false)}
        >
          <img src={Menu} alt="menu" className="w-full h-full object-cover" />
        </div>
      )}
      {(showMenu || showReorderMenu) && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 z-10"
          onClick={() => {
            setShowMenu(false);
            setShowReorderMenu(false);
          }}
        ></div>
      )}
      <hr className="w-full hidden sm:block" />
    </div>
  );
};

export default Navbar;
