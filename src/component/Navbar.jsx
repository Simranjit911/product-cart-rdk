import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  let cartL = useSelector((state) => state.cart.cart);
  return (
    <div className="fixed top-0 w-full flex justify-around bg-blue-300 py-2 shadow-xl text-lg font-semibold">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/cart">
        <div className="flex  items-center ">
          <p className="text-2xl mt-1">
            <MdShoppingCart />
          </p>
          <span
            className={`relative bottom-2 right-0 text-xs ${
              cartL > 0 && "animate-bounce delay-500 transition-all"
            }`}
          >
            {cartL.length > 0 ? `${cartL.length}` : " "}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
