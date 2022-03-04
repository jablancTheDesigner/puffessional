import React from "react";
import ProductListing from "../components/ProductListing";

const Home = (props) => {
  return (
    <>
      {props.products && (
        <ProductListing products={props.products} addToCart={props.addToCart} />
      )}
    </>
  );
};

export default Home;
