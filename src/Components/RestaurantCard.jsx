import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, avgRating, cuisines} = props.data;
      return (
          <div className="res-card">
              <img 
                  className="res-logo" 
                  src={CDN_URL + cloudinaryImageId}
                  alt="restaurant-img"
              />
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>Rating: {avgRating}</h4>
          </div>
      )
  }

  export default RestaurantCard;