import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/globals.css";

function StoreApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    console.log(id);
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation removeFromCart={removeFromCart} cart={cart} />
      <Component {...pageProps} addToCart={addToCart} cart={cart} />
    </>
  );
}

export default StoreApp;
