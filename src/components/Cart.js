import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCart, removeFromCart } from "../redux/reducers/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function Cart(props) {
  const dispatch = useDispatch();
  const cart = useSelector(showCart);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.payload.data.price;
  }, 0);
  const imageStyling = {
    objectFit: "contain",
    width: "40px",
    margin: "0 0.5rem 0",
  };

  return (
    <>
      <button
        className="navbar-toggler border-0 outline-0 position-relative p-0 me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#cart"
        aria-controls="cart"
      >
        <ShoppingCartIcon className="me-1" />

        {cart.length > 0 && (
          <span className="position-absolute top-0 mt-2 mw-2  start-100 translate-middle badge rounded-pill bg-danger  small">
            {cart.length}
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
        <div className="offcanvas-body d-flex flex-column h-100">
          {cart.length > 0 &&
            cart.map((item, idx) => {
              return (
                <div className="d-flex justify-content-between border-top py-2">
                  <div className="pe-3 d-flex">
                    <img
                      src={item.payload.data.image}
                      style={imageStyling}
                      alt={item.payload.data.title}
                    />
                    <p className="m-0">{item.payload.data.title}</p>
                  </div>
                  <div className="text-right d-flex mw-4">
                    <p className="me-2 fw-bold m-0">{`$${item.payload.data.price.toFixed(
                      2
                    )}`}</p>
                    <RemoveCircleOutlineIcon
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-danger"
                    />
                  </div>
                </div>
              );
            })}
          {cart.length === 0 && (
            <div className="d-flex justify-content-between">
              <div className="text-center">No Items</div>
            </div>
          )}
        </div>
        <div className="flex flex-column p-2 bg-white">
          <h3 className="display-5 fs-1" colSpan={2}>
            Total
          </h3>
          <h3 className="display-3 ">{`$${totalPrice.toFixed(2)}`}</h3>
        </div>
      </div>
    </>
  );
}
