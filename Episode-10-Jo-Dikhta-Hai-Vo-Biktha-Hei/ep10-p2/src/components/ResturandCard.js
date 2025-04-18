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

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:border-1">
      <img
        className="res-logo rounded-lg max-h-[150px] w-[100%] "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="flex justify-between">
        <h4 className="staring inline-block  px-2.5 rounded-lg">
          <div className="flex ">
            {/* <div className="  bg-green-500  h-5 w-5 flex items-center justify-center">
              <span className=" text-white ml-1 ">*</span>
            </div>{" "} */}
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center animate-bounce text-white text-2xl font-bold">
              *
            </div>

            <span className="ml-1"> {avgRatingString}</span>
          </div>
        </h4>
        <h4 className="del-time">{deliveryTime} mins</h4>
      </div>
      <h4 className="res-cusine break-words text-gray-400">
        {cuisines.join(",")}
      </h4>
      <div className="res-details flex justify-between">
        <h4 className="price-for-two">₹{costfortwo} FOR TWO</h4>
      </div>
    </div>
  );
};

export default ResturandCard;
