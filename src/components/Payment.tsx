import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProgressPayment from "./../assets/images/Progress payment.png";
import Payments from "./../assets/images/Payments.png";
import PaymentsMobile from "./../assets/images/Payments Mobile.png";

const Payment = () => {
  return (
    <div id="payment">
      <div className="flex flex-col items-center justify-center gap-10 my-10">
        <p className="text-2xl font-bold text-gray-700 block sm:hidden">
          Payment
        </p>
        <img
          src={ProgressPayment}
          alt="progress bar"
          className="hidden sm:block my-4"
        />
        <img src={Payments} alt="payments" className="hidden sm:block" />
        <img src={PaymentsMobile} alt="payments" className="block sm:hidden" />
      </div>
      <div className="sm:ml-[1000px] ml-40 my-20 mb-10 ">
        <Link to="/confirm">
          <button className="bg-violet-950 rounded-lg my-4 py-2 px-10 -mr-40 text-white text-base flex flex-row gap-2 items-center justify-center">
            Confirm Payment <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
