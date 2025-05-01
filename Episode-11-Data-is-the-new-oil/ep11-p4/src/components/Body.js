import ResturandCard, { withPromotedLabel } from "./ResturandCard";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// not using key ( not acceptable) <<<<<<index as key <<<<<< unique id (best practice)
const Body = () => {
  // Local State Variable - super power variable- scope inside this components.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResturands, setFilteredResturands] = useState([]);

  const [searchText, setSearchText] = useState("");
  // withPromotedLabel is a higher order components, and we pass a Resturandcard component.
  // and it will return a new components which have a label inside it which is RestaurantCardPromoted
  const RestaurantCardPromoted = withPromotedLabel(ResturandCard);

  console.log("body", listOfRestaurants);

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

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
        <div className="m-4 p-4 flex items-center ">
          UserName:
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturands.map((resturant) => (
          <Link
            key={resturant?.card?.card?.info.id}
            to={"/restaurants/" + resturant?.card?.card?.info.id}
          >
            {console.log(resturant?.card?.card?.info.promoted)}{" "}
            {/* if the resturand is promoted then add a promoted label to it */}
            {resturant?.card?.card?.info.promoted ? (
              <RestaurantCardPromoted resData={resturant} />
            ) : (
              <ResturandCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
