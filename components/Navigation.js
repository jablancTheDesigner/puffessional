import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import axios from "axios";
import Link from "next/link";

export default function Navigation(props) {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log(err);
      });
    setCategories([...resp.data]);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Cart cart={props.cart} removeFromCart={props.removeFromCart} />
          <a
            href="/"
            className="navbar-brand m-0 text-center fs-2 fw-bold text-uppercase"
          >
            Logo
          </a>

          <button
            className="navbar-toggler border-0 outline-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

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
                {categories &&
                  categories.map((link) => {
                    return (
                      <li className="nav-item" key={link}>
                        <a href="/" className="nav-link">
                          {link}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
