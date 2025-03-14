import ResturandCard from "./ResturandCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// not using key ( not acceptable) <<<<<<index as key <<<<<< unique id (best practice)
const Body = () => {
  // Local State Variable - super power variable- scope inside this components.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9966135&lng=77.5920581&str=food&trackingId=332b900d-769c-ef2c-e880-c15159ec20fb&submitAction=ENTER&queryUniqueId=8bf8545f-0e09-237c-c208-d322b73c9efd"
    );

    const json = await data.json();
    //console.log(json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT);
    //optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    //json?.data?.cards[3].card?.card?.info?.name
  };

  //Shimmer effect- this concept known as conditional rendering
  // if (listOfRestaurants.length === 0) {
  //  return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
