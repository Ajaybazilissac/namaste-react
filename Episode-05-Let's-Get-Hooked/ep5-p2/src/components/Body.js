import ResturandCard from "./ResturandCard";
import resList from "../utils/mockData";
import { useState } from "react";
// not using key ( not acceptable) <<<<<<index as key <<<<<< unique id (best practice)
const Body = () => {
  // Local State Variable - super power variable- scope inside this components.
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Resturand
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
          <ResturandCard
            key={resturant?.card?.card?.info.id}
            resData={resturant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
