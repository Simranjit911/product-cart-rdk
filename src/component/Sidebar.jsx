import { useSelector, useDispatch } from "react-redux";
import { remove, decqty, incqty, carttotal } from "../UserSlice";
import { useEffect } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
const Sidebar = () => {
  let dis = useDispatch();
  let { cart, total } = useSelector((state) => state.cart);
  //  let sum=cart.reduce((total,i)=>total+i.qty*i.price,0)
  useEffect(() => {
    dis(carttotal());
  }, [cart]);

  return (
    <>
    {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-[100%] mx-auto mb-20 my-16">
        {cart.length > 0 ? (
          cart.map((i, idx) => {
            let { img, name, price, desc, qty } = i;
            return (
              <div
                key={idx}
                className="w-[280px]  items-center justify-between flex flex-col mx-auto shadow-2xl rounded-md my-5 gap-4 py-3 px-1">
                  {/* Image */}
                <div className="p-2">
                  <img src={img} alt="" className="w-[120px]" />
                </div>

                {/* Details */}
                <div className="px-2 flex flex-col justify-evenly gap-3">

                  {/* Name */}
                  <p className="text-lg font-semibold">{name}</p>
                  {/* Desc */}
                  <p>{(desc = desc.slice(0, 160))}....</p>

                  {/* Price */}
                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-1">
                      <p className="text-lg font-bold">₹{price}</p>
                      <p className="text-lg font-semibold line-through">
                        ₹{price * 1.5}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex gap-1">
                      <button
                        className="font-bold bg-gray-500 text-white px-1 rounded-md shadow-md hover:scale-110 duration-100"
                        onClick={() => dis(incqty(i))}>
                        +
                      </button>
                      {/* Qty */}
                      <p>{qty}</p>
                      <button
                        className="font-bold bg-gray-500 text-white px-1 rounded-md shadow-md hover:scale-110 duration-100"
                        onClick={() => dis(decqty(i))}>
                        -
                      </button>
                    </div>
                    {/* subtotal */}
                    <p className="text-lg font-semibold">₹{price * qty}</p>
                    
                    {/* Remove Button */}
                    <button
                      className="font-bold px-2 py-1 bg-gray-900 text-white px-1 rounded-md shadow-md hover:scale-110 duration-100"
                      onClick={() => dis(remove(i))}>
                      <MdRemoveShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="self-center w-full text-lg text-center font-semibold absolute top-20">
            Nothing in Cart
          </div>
        )}
      </div>
      {cart.length >= 1 && (
        <div className="fixed  bottom-0 gap-0.5 justify-center bg-blue-200 flex w-[100vw] py-2 flex-col text-lg font-semibold shadow-xl">
          <p className="text-center">Total:₹{total}</p>
          {/* <button className="bg-slate-800 w-1/3 mx-auto rounded-md text-white active:bg-slate-500 active:scale-90 duration-100">
            Checkout
          </button> */}
        </div>
      )}
    </>
  );
};

export default Sidebar;
