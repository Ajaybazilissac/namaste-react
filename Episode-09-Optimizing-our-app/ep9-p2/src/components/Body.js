import ResturandCard from "./ResturandCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

// not using key ( not acceptable) <<<<<<index as key <<<<<< unique id (best practice)
const Body = () => {
  // Local State Variable - super power variable- scope inside this components.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResturands, setFilteredResturands] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
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
    setFilteredResturands(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    //json?.data?.cards[3].card?.card?.info?.name
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection;
      </h1>
    );
  //Shimmer effect- this concept known as conditional rendering
  // if (listOfRestaurants.length === 0) {
  //  return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the resturand cards and update the UI
              //searchText
              console.log(searchText);
              const filteredResturands = listOfRestaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredResturands(filteredResturands);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Resturand
        </button>
      </div>
      <div className="res-container">
        {filteredResturands.map((resturant) => (
          <Link
            key={resturant?.card?.card?.info.id}
            to={"/restaurants/" + resturant?.card?.card?.info.id}
          >
            {" "}
            <ResturandCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
