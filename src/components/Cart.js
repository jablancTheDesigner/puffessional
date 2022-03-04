import React from "react";

export default function Cart(props) {
  const totalPrice = props.cart.reduce((total, item) => {
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
        <span className="material-icons fs-3">shopping_cart</span>

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
          <ul className="p-0">
            {props.cart.length > 0 &&
              props.cart.map((group) => {
                return (
                  <li className="list-group-item d-flex">
                    <div className="me-auto">
                      <div className="fw-bold pe-3">{group.title}</div>
                      {group.category}
                    </div>
                    <div className="text-right d-flex flex-column">
                      {`$${group.price.toFixed(2)}`}
                      <button
                        onClick={() => props.removeFromCart(props.id)}
                        className="mt-auto btn btn-danger"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            {props.cart.length === 0 && (
              <li className="list-group-item text-center">Cart Empty</li>
            )}
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="me-auto">
                <div className="fw-bold fs-4">Total</div>
              </div>
              <span className="display-4 fs-1">
                {`$${totalPrice.toFixed(2)}`}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
