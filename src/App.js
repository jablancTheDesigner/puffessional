import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const listAfterRemoval = cart.filter((item) => item.id !== id);
    console.log(cart);
  };

  const fetchProducts = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    await setAllProducts([...resp.data]);
  };

  const fetchCategories = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log(err);
      });
    await setCategories([...resp.data]);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation
        removeFromCart={removeFromCart}
        cart={cart}
        categories={categories}
      />
      <Home products={allProducts} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
