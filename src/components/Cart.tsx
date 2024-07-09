import { Link } from "react-router-dom";
import CartItem1 from "./../assets/images/Cart Item 1.png";
import CartItem2 from "./../assets/images/Cart Item 2.png";
import CartItem3 from "./../assets/images/Cart Item 3.png";
import CartItem4 from "./../assets/images/Cart Item 4.png";
import Cart1 from "./../assets/images/Cart 1.png";
import Cart2 from "./../assets/images/Cart 2.png";
import Cart3 from "./../assets/images/Cart 3.png";
import Cart4 from "./../assets/images/Cart 4.png";
import ProgressCart from "./../assets/images/Progress cart.png";
import { FaArrowRight } from "react-icons/fa";

const Cart = () => {
  return (
    <div id="cart" className="flex flex-col items-center justify-center ">
      <div className="max-w-[430px] md:max-w-[900px] m-5 flex flex-col gap-4 items-center justify-center ">
        <p className="text-2xl font-bold text-gray-700 block sm:hidden">
          Shopping Cart
        </p>
        <img
          src={ProgressCart}
          alt="progress bar"
          className="hidden sm:block my-4"
        />
        <div className="hidden sm:flex flex-col gap-4 ">
          <img src={CartItem1} alt="cart item" />
          <img src={CartItem2} alt="cart item" />
          <img src={CartItem3} alt="cart item" />
          <img src={CartItem4} alt="cart item" />
        </div>
        <div className="sm:hidden flex flex-col gap-4 ">
          <img src={Cart1} alt="cart item" />
          <img src={Cart2} alt="cart item" />
          <img src={Cart3} alt="cart item" />
          <img src={Cart4} alt="cart item" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-[500px] items-center justify-center">
          <hr className="w-11/12 block sm:hidden " />
          <div className="flex flex-row gap-20 my-4 -ml-20 font-bold">
            <p>Subtotal</p>
            <p>£651.49</p>
          </div>
          <hr className="w-11/12 block sm:hidden" />
          <Link to="/checkout">
            <button className="bg-violet-950 rounded-lg my-4 py-2 px-10 -mr-40 text-white text-base flex flex-row gap-2 items-center justify-center">
              Checkout <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
