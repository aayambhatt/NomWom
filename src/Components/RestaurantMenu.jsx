import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();
    // abstract fetching data logic 
    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) {
        return <Shimmer />;
    }

    // Use optional chaining to avoid destructuring errors
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

    
    if (!restaurantInfo) {
        return <h1>Restaurant data not available</h1>;
    }

    const { name, cuisines, costForTwoMessage } = restaurantInfo;

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p> 
        </div>
    );
};

export default RestaurantMenu;
