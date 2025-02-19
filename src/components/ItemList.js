import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 my-3 bg-gray-50 shadow-md rounded-lg flex justify-between border border-gray-200"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-base font-medium text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-gray-700 font-semibold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            <button
              className="absolute bottom-2 right-2 p-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg shadow-md cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-24 object-cover rounded-md shadow-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
