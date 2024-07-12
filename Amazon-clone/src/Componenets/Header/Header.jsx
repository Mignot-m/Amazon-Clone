import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
          </div>
          {/* delivery */}

          <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
              <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          <div>
            {/* right side link */}

            <div className={classes.order__container}>
              <a href="" className={classes.language}>
                <img
                  src="https://image.shutterstock.com/image-vector/american-flag-vector-usa-260nw-2443533357.jpg"
                  alt="flag of united state"
                />
              <select name="" id="">
                <option value="">EN</option>
              </select>
              </a>

              <a href="">
                <p>Sign In</p>
                <span>Account & Lists</span>
              </a>
              {/* orders */}
              <a href="">
                <p>returns</p>
                <span> & Orders</span>
              </a>
              <a href="" className={classes.cart}>
              <BiCart size={35} />
                <span>0</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
