import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating, sla } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center bg-orange-50">
      <h1 className="font-bold text-3xl p-2 mt-2 my-3 text-gray-900">{name}</h1>
      <div className="flex justify-center">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md w-6/12 mx-auto">
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span className="text-yellow-500 font-semibold">
              {avgRating} ⭐
            </span>
            <span className="text-gray-700">• {costForTwoMessage}</span>
          </div>
          <div className="flex flex-col items-center mt-1 text-base">
            <span className="text-gray-600">{cuisines.join(", ")}</span>
            <span className="text-green-600 font-medium">
              • {sla.deliveryTime} min
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowItems={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
