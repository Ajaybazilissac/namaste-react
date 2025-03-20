// ResturandCard Component
import { CDN_URL } from "../utils/constants";

const ResturandCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,

    costForTwo,
  } = resData?.card?.card?.info;
  const { deliveryTime } = resData?.card?.card?.info?.sla;
  let costfortwo = resData?.card?.card?.info?.costForTwo / 100;
  console.log();
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cusine">{cuisines.join(",")}</h4>
      <div className="res-details">
        <h4 className="staring">* {avgRatingString}</h4>

        <h4 className="del-time">{deliveryTime} MINS</h4>
        <h4 className="price-for-two">₹{costfortwo} FOR TWO</h4>
      </div>
    </div>
  );
};

export default ResturandCard;
