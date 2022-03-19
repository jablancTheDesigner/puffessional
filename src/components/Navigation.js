import React from "react";
import Cart from "../components/Cart";

export default function Navigation(props) {
  return (
    <>
      <nav
        className="navbar navbar-light bg-light sticky-top"
        style={{ zIndex: "99" }}
      >
        <div className="container">
          {/* <Cart cart={props.cart} removeFromCart={props.removeFromCart} /> */}
          <a href="/" className="navbar-brand m-0 text-center fs-2 ">
            <small>the</small>
            <span className="fw-bold text-uppercase">SHOP</span>
          </a>

          <div>
            <Cart />
            <button
              className="navbar-toggler border-0 outline-0 mw-6"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
