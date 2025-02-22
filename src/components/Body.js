import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { user, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (!onlineStatus) {
    return <h1>You are offline!! Please check your internet connection;</h1>;
  }

  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-orange-200 min-h-screen p-6">
      <div className="flex flex-wrap justify-between gap-4 mx-10">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="p-2 w-64 border-2 border-orange-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-yellow-300 rounded-2xl cursor-pointer hover:bg-yellow-400 transition-all"
            onClick={() => {
              const filteredRes = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-orange-300 rounded-2xl cursor-pointer hover:bg-orange-400 transition-all"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="user" className="text-gray-800 font-medium">
            User:
          </label>
          <input
            type="text"
            className="p-2 w-64 border-2 border-orange-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={user}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
