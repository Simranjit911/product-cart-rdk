import { add } from "../UserSlice";
import { useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
const Card = ({ data }) => {
  let dis = useDispatch();
  //   const  {add}  = useSelector((state) => state);
  let { img, name, price, desc } = data;
  return (
  //  Product
    <div className="w-[280px] h-65 items-center justify-between flex flex-col mx-auto shadow-2xl rounded-md my-8  py-3">
        {/* image */}
      <div className="p-2">        
        <img src={img} alt="" className="w-[120px]" />
      </div>

      {/* Details */}
      <div className="px-2 flex flex-col justify-evenly gap-2">
        {/* Name */}
        <p className="text-lg font-semibold">{name}</p>
        {/* Description */}
        <p>{(desc = desc.slice(0, 160))}.....</p>

        {/* Price */}
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-3">
            <p className="text-lg font-bold">₹{price}</p>
            <p className="text-lg font-semibold line-through">₹{price * 1.3}</p>
          </div>

          {/* Add to cart btn */}
          <button
            className="font-bold px-2 py-1 bg-gray-900 text-white px-1 rounded-md shadow-md hover:scale-110 duration-100"
            onClick={() => dis(add(data))}>
            <MdAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
