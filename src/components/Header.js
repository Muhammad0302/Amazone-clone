import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(user.email);
  const handleAuthinticate = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* logo */}
        <SearchIcon className="header__seachIcon" />
      </div>
      <div className="header__nav">
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to={!user && "/login"}
          className="header__option"
          onClick={handleAuthinticate}
        >
          <span className="header__optionOne">
            Hello {(user && user.email) || "Guest"}
          </span>
          <span className="header__optionTwo">
            {user ? "Sign Out" : "Sign in"}
          </span>
        </Link>

        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link
            to="/Checkout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ShoppingBasketIcon />
            <span className="header__optionTwo header__basketCount">
              {basket?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
