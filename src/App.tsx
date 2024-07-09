import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home";
import Product from "./components/Product.tsx";
import Cart from './components/Cart.tsx';
import Checkout from './components/Checkout.tsx';
import Payment from './components/Payment.tsx';
import ConfirmPayment from './components/ConfirmPayment.tsx';

function App() {
  return (
    <Router>
      <div className="max-w-[430px] md:max-w-[1440px] m-auto ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product" Component={Product} />
          <Route path="/cart" Component={Cart} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/payment" Component={Payment} />
          <Route path="/confirm" Component={ConfirmPayment} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
