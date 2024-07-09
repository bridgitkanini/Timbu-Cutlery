import { Link } from "react-router-dom";
import ProgressCheckout from "./../assets/images/Progress checkout.png";
import { FaArrowRight } from "react-icons/fa";
import DiscountCodes from "./../assets/images/Discount codes.png";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Checkout = () => {
  return (
    <div id="checkout">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-2xl font-bold text-gray-700 block sm:hidden">
          Checkout
        </p>
        <img
          src={ProgressCheckout}
          alt="progress bar"
          className="hidden sm:block my-4"
        />
        <div>
          <hr className="w-full" />
          <div className="flex flex-row gap-20 sm:gap-[600px] m-4 font-bold">
            <p>Discount Codes</p>
            <img src={DiscountCodes} alt="discount code" />
          </div>
          <hr />
        </div>
        <div className="flex flex-row gap-28 sm:gap-[640px] items-start">
          <div className="flex flex-col gap-2">
            <p className="font-bold underline">Delivery Address</p>
            <p>112 Picard Street</p>
            <p>Gregory Street</p>
            <p>Salford, Manchester</p>
            <p>M3 8DT</p>
          </div>
          <button className="border border-gray-400 rounded-lg py-1 px-2 w-fit self-end">
            Change
          </button>
        </div>
        <hr className="w-10/12 sm:w-2/3" />
        <div className="flex flex-row gap-28 sm:gap-[640px] items-start">
          <div className="flex flex-col gap-2">
            <p className="font-bold underline">Billing Address</p>
            <p>112 Picard Street</p>
            <p>Gregory Street</p>
            <p>Salford, Manchester</p>
            <p>M3 8DT</p>
          </div>
          <button className="border border-gray-400 rounded-lg py-1 px-2 w-fit self-end">
            Change
          </button>
        </div>
        <hr className="w-10/12 sm:w-2/3" />
        <div className="flex flex-col gap-2 sm:-ml-[570px] ">
          <div className="flex flex-row gap-20 -ml-20">
            <p className="flex flex-row gap-2 items-center justify-center text-sm">
              <MdOutlineCheckBoxOutlineBlank className="text-gray-400" />
              Standard shipping
            </p>
            <p className="font-bold text-sm -ml-3">$3.99</p>
          </div>
          <div className="flex flex-row gap-20 -ml-20">
            <p className="flex flex-row gap-2 items-center justify-center text-sm">
              <IoIosCheckboxOutline className="text-violet-950" />
              Express shipping
            </p>
            <p className="font-bold text-sm">$5.99</p>
          </div>
        </div>
        <hr className="w-10/12 sm:w-2/3" />
        <div className="flex flex-col gap-2 text-xl sm:-ml-[500px] ">
          <div className="flex flex-row gap-32 -ml-20">
            <p className="flex flex-row gap-2 items-center justify-center">
              Subtotal
            </p>
            <p>$651.49</p>
          </div>
          <div className="flex flex-row gap-32 -ml-20">
            <p className="flex flex-row gap-2 items-center justify-center">
              Shipping
            </p>
            <p>$5.99</p>
          </div>
        </div>
        <hr className="w-10/12 sm:w-2/3" />
        <div className="flex flex-col md:flex-row sm:gap-56 sm:-ml-16  items-center justify-center">
          <div className="flex flex-row gap-40 -ml-20 sm:ml-56 font-bold text-xl">
            <p>Total</p>
            <p>$655.48</p>
          </div>
          <hr className="w-full sm:w-2/3 my-4" />
          <div className="flex flex-row items-center gap-16 sm:gap-0 justify-center my-10 sm:my-0">
            <Link to="/cart">
              <p className="underline text-violet-950 block sm:hidden">
                Back to Cart
              </p>
            </Link>
            <Link to="/payment">
              <button className="bg-violet-950 rounded-lg my-4 sm:mr-32 py-2 px-10 text-white text-base flex flex-row gap-2 items-center justify-center">
                Payment <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
