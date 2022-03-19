import React from "react";
import ProductListing from "../components/ProductListing";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <Navigation />
      <ProductListing />
    </>
  );
};

export default Home;
