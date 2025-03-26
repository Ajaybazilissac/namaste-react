import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
// Header Component
const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render...");

  // if no dependancy array => usedEffect is called in every render.
  // if there is an empty dependancy array = [] => useEffect eill call only initial render(just once).
  // if dependancy array is [btnNameReact]=> called everytime when btnNameReact changes
  useEffect(() => {
    console.log("UseEffect called...");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
