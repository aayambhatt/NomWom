import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                MENU_API+resId
            );
            const json = await data.json();
            console.log(json);

            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

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
