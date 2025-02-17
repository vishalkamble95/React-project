import { TbSquareArrowDownFilled } from "react-icons/tb";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {

  const handleClick = () => {
    setShowItems();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-white shadow-md rounded-lg p-4 border border-gray-200">
        <div
          className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 rounded-md"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-gray-500 text-xl">
            <TbSquareArrowDownFilled />
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
