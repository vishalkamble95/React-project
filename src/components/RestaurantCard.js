const RestaurantCard = (props) => {
  const { resData } = props;

  const { imageId, accessibility } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.replicasurfaces.com/cdn/shop/articles/Replica_Surfaces_backdrops_food_jewelry_photo_photography_-_1_1269x.jpg?v=1572994950"
      />
      <h3>{accessibility.altText}</h3>
    </div>
  );
};

export default RestaurantCard;
