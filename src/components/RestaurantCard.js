import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    resData.info;

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-orange-50 hover:bg-orange-100 shadow-md transition-all">
      <img
        className="w-full h-40 object-cover rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="mt-2 text-lg font-semibold text-orange-700">{name}</h3>
      <h4 className="text-gray-600 text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-800 font-medium">{costForTwo}</h4>
      <h4 className="text-yellow-500 font-bold">{avgRating} ⭐</h4>
      <h4 className="text-gray-500 text-sm">{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {console.log("in withPromotedLabel")}
        <label className="absolute bg-slate-800 text-white m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
