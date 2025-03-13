import ResturandCard from "./ResturandCard";
import resList from "../utils/mockData";
// not using key ( not acceptable) <<<<<<index as key <<<<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
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
