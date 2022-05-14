import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
// import Cart from "../buttons/Cart";
import Login from "../buttons/Login";
import SignUp from "../buttons/SignUp";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                 <span className=""></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Product">
                 Mobile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/laptop">
                  Laptop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Ipad">
                  Ipad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
            <Link className="navbar-brand mc-Auto fw-bold" to="/">
            Apptronix-Store
          </Link>
          <Login></Login>
          <SignUp></SignUp>
          {/* <Cart></Cart> */}
          <CartBtn></CartBtn>
          </div>
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;
