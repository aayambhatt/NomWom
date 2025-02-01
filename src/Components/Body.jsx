import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [filteredRestaurants, setfilteredRestaurants] = useState(restaurants);


    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
                //Filter logic
                const filterList = filteredRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4.5
                );
                setfilteredRestaurants(filterList);
              }} >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {filteredRestaurants.map((restaurant) => {
    return <RestaurantCard key={restaurant.info.id} data={restaurant.info} />
})}
            </div>
        </div>
    )
}

export default Body;
