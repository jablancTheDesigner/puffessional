import React from "react";

export default function Cart(props) {
  const price = props.cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const cartBreakDown = props.cart.reduce((obj, item) => {
    if (obj.indexOf(item) > -1) {
      obj[obj.indexOf(item)] = {
        ...item,
        count: obj[obj.indexOf(item)] ? obj[obj.indexOf(item)].count + 1 : 1,
        price: obj[obj.indexOf(item)]
          ? (obj[obj.indexOf(item)].count + 1) * item.price
          : item.price,
      };
    } else {
      item.count = 1;
      obj.push(item);
    }
    // obj[`item-${item.id}`] = {
    //   ...item,
    //   count: obj[`item-${item.id}`] ? obj[`item-${item.id}`].count + 1 : 1,
    //   price: obj[`item-${item.id}`]
    //     ? (obj[`item-${item.id}`].count + 1) * item.price
    //     : item.price,
    // };
    return obj;
  }, []);

  console.log(cartBreakDown);

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
              cartBreakDown.map((group) => {
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                      <div class="fw-bold pe-3">
                        {group.title} x{group.count}
                      </div>
                      {group.category}
                    </div>
                    <div class="text-right d-block">
                      {`$${group.price.toFixed(2)}`}
                      <button onClick={() => props.removeFromCart(props.id)}>
                        {" "}
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            {props.cart.length === 0 && (
              <li class="list-group-item text-center">Cart Empty</li>
            )}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="me-auto">
                <div class="fw-bold fs-4">Total</div>
              </div>
              <span class="display-4 fs-1">{`$${price.toFixed(2)}`}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
