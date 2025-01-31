import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {restaurants.map((restaurant) => {
    return <RestaurantCard key={restaurant.info.id} data={restaurant.info} />
})}
            </div>
        </div>
    )
}

export default Body;
