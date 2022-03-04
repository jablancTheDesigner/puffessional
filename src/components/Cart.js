import React from "react";
import Product from "./Product";

export default function Cart(props) {
  const price = props.cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <>
      <button
        className="navbar-toggler border-0 outline-0 position-relative p-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#cart"
        aria-controls="cart"
      >
        {/* <span className="navbar-toggler-icon"></span> */}
        <span class="material-icons fs-3">shopping_cart</span>

        {props.cart.length > 0 && (
          <span className="position-absolute top-0 mt-2 mw-2 start-100 translate-middle badge rounded-pill bg-danger">
            {props.cart.length}
          </span>
        )}
      </button>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="cart"
        aria-labelledby="cartLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul class="p-0">
            {props.cart.length > 0 &&
              props.cart.map((item) => {
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                      <div class="fw-bold pe-3">{item.title}</div>
                      {item.category}
                    </div>
                    <span class="">{`$${item.price.toFixed(2)}`}</span>
                  </li>
                );
              })}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="me-auto">
                <div class="fw-bold display-4">Total</div>
              </div>
              <span class="display-4">{`$${price.toFixed(2)}`}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
