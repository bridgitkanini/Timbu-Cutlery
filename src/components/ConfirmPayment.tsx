import { Link } from "react-router-dom";
import Order1 from "./../assets/images/Order 1.png";
import Order2 from "./../assets/images/Order 2.png";
import Order3 from "./../assets/images/Order 3.png";
import Order4 from "./../assets/images/Order 4.png";
import OrderMobile1 from "./../assets/images/Order Mobile 1.png";
import OrderMobile2 from "./../assets/images/Order Mobile 2.png";
import OrderMobile3 from "./../assets/images/Order Mobile 3.png";
import OrderMobile4 from "./../assets/images/Order Mobile 4.png";

const ConfirmPayment = () => {
  return (
    <div id="confirm">
      <div className="max-w-[430px] md:max-w-[1440px] flex flex-col items-center justify-center gap-4 my-10">
        <p className="text-2xl font-bold text-gray-700 mb-10">
          Payment Complete!
        </p>
        <p className="italic text-2xl">Thank you for shopping at</p>
        <p className="text-3xl font-bold">TIMBU!</p>
      </div>
      <p className="ml-10 block sm:hidden">Orders</p>
      <div className="flex flex-col gap-2 items-center justify-center mb-4">
        <div className="hidden sm:flex flex-col gap-4">
          <img src={Order1} alt="order" />
          <img src={Order2} alt="order" />
          <img src={Order3} alt="order" />
          <img src={Order4} alt="order" />
        </div>
        <div className="sm:hidden flex flex-col gap-2">
          <img src={OrderMobile1} alt="order" />
          <img src={OrderMobile2} alt="order" />
          <img src={OrderMobile3} alt="order" />
          <img src={OrderMobile4} alt="order" />
        </div>
      </div>
      <hr className="w-full my-4" />
      <div className="sm:ml-96">
        <div className="flex flex-row gap-20 sm:gap-80 ml-10">
          <p>Order Date</p>
          <p>$651.49</p>
        </div>
        <div className="flex flex-row gap-20 sm:gap-80 ml-10">
          <p>Promocode</p>
          <p>N/A</p>
        </div>
        <hr className="w-11/12 ml-4 my-4 sm:-ml-40" />
        <div className="flex flex-row gap-24 sm:gap-[330px] ml-10">
          <p>Sub Total</p>
          <p>$651.49</p>
        </div>
        <div className="flex flex-row gap-24 sm:gap-[330px] ml-10">
          <p>Shipping</p>
          <p>$3.99</p>
        </div>
        <div className="flex flex-row gap-24 sm:gap-[330px] ml-10">
          <p>Discount</p>
          <p>$651.49</p>
        </div>
        <hr className="w-11/12 ml-4 my-4 sm:-ml-40" />
        <div className="flex flex-row gap-[120px] sm:gap-[354px] ml-10 font-bold">
          <p>Total</p>
          <p>$655.48</p>
        </div>
        <hr className="w-11/12 ml-4 my-4 sm:-ml-40" />
      </div>
      <div className="flex flex-row items-end justify-end">
        <Link to="/">
          <button className="bg-violet-950 rounded-lg my-4 sm:my-10 py-2 px-10 mr-8 sm:mr-56  text-white text-base flex flex-row gap-2 items-center justify-center">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPayment;
