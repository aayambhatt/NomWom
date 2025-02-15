import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State for all restaurants (original list)
  const [allRestaurants, setAllRestaurants] = useState([]);
  // State for filtered restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // State for search text
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(restaurants); // Store the original data
    setFilteredRestaurants(restaurants); // Use this for filtering
  };

    const onlineStatus = useOnlineStatus();
   if(onlineStatus===false)
    return (
      <h1>Looks like you're offline, check your internet connection!!!</h1>
  );


  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // Filter restaurants based on search text
              const filtRes = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtRes);
            }}
          >
            Search
          </button>
          <button onClick={()=>{
            setSearchText(" ")
            setFilteredRestaurants(allRestaurants);
          }}  >Reset</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter restaurants with rating > 4.5
            const filterList = allRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
       <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard data={restaurant.info} /></Link>  
        ))}
      </div>
    </div>
  );
};

export default Body;
