import React from "react";
import "./style.css";


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Shopi-FY
        </span>
        <div className="my_shop" onClick={() => setShow(true)}>Home</div>


        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;