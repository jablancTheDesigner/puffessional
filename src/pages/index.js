import React from "react";
import ProductListing from "../components/ProductListing";

const Home = (props) => {
  return (
    <>
      <ProductListing addToCart={props.addToCart} />
    </>
  );
};

export default Home;
