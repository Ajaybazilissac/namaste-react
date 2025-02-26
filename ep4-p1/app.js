import React from "react";
import ReactDOM from "react-dom/client";

/**
 * -
 * @returns
 * Header
 *  -Logo
 *  -Nav Item
 * Body
 *  -search
 *  -Resturand container
 *    -Resturand Card
 *      -Img
 *      -Name of resturand, star rating, cusine, delivery time
 * Footer
 *    -Copyright
 *    - Links
 *    -Address
 *    -Contact
 */

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// ResturandCard Component
const ResturandCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
      />
      <h3 className="res-name">Meghna Foods</h3>
      <h4 className="res-cusine">Biriyani, North Indian, Asian</h4>
      <div className="res-details">
        <h4 className="staring">* 4.4 </h4>
        <h4 className="del-time">38 MINS</h4>
        <h4 className="price-for-two">1200 FOR TWO</h4>
      </div>
    </div>
  );
};

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturandCard /> <ResturandCard /> <ResturandCard /> <ResturandCard />
        <ResturandCard /> <ResturandCard /> <ResturandCard />
      </div>
    </div>
  );
};

// AppLayout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
