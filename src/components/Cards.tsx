import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Image01 from "./../assets/images/image01.png";
import Image02 from "./../assets/images/image02.png";
import Image03 from "./../assets/images/image03.png";
import Image04 from "./../assets/images/image04.png";
import Image05 from "./../assets/images/image05.png";
import Image06 from "./../assets/images/image06.png";
import Image07 from "./../assets/images/image07.png";
import Image08 from "./../assets/images/image08.png";
import Image09 from "./../assets/images/image09.png";
import { FiPlus } from "react-icons/fi";

type CardsProps = {
  className?: string;
};

const Cards: FunctionComponent<CardsProps> = ({ className }) => {
  const imagesData = [
    { image: Image01, price: "£100.00", name: "Stainless Steel Frying Pan" },
    { image: Image02, price: "£220.50", name: "Gourmet Kiru Knife Set" },
    { image: Image03, price: "£300.00", name: "Stand Mixer" },
    {
      image: Image04,
      price1: "£80.00",
      price2: "£70.00",
      name: "Rochell Highball Glasses",
    },
    {
      image: Image05,
      price1: "£20.00",
      price2: "£10.00",
      name: "Clear Recycled Plastic Tumbler",
    },
    { image: Image06, price: "£199.00", name: "Granite Non-Stick Griddle Pan" },
    {
      image: Image07,
      price1: "£49.00",
      price2: "£40.00",
      name: "Granite Shallow Casserole Dish & Lid",
    },
    { image: Image08, price: "£199.00", name: "Pasta Maker" },
    { image: Image09, price: "£199.00", name: "Stainless Steel Frying Pan" },
  ];

  return (
    <div className="max-w-[430px] md:max-w-[1440px] m-5 flex flex-col gap-4 items-center justify-center">
      <div className={className}>
        {imagesData.map((image) => (
          <Link to="/product" className="flex flex-col gap-2" key={image.name}>
            <img
              src={image.image}
              alt="image"
              className="p-5 sm:p-10 h-[170px] sm:h-[250px] object-cover cursor-pointer"
            />
            <div className="flex flex-row justify-between px-5 text-base">
              <div>
                <p className="font-bold text-lg">{image.price}</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-lg text-red-600 line-through">
                    {image.price1}
                  </p>
                  <p className="font-bold text-lg">{image.price2}</p>
                </div>
                <p>{image.name}</p>
              </div>
              <div className="hidden sm:flex sm:flex-col items-center justify-center">
                <button className="bg-purple-800 rounded-2xl py-2 px-4 text-white text-2xl">
                  <FiPlus />
                </button>
                <p>Quick Add</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
