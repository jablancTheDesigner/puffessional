import React from "react";
import Product from "./Product";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

export default function ProductListing(props) {
  return (
    <>
      <div className="container py-5">
        <div className="row gy-4">
          {props.products &&
            props.products.map((product) => {
              return <Product product={product} addToCart={props.addToCart} />;
            })}
        </div>
      </div>
    </>
  );
}
