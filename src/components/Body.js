import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating < 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
