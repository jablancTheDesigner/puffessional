import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const listAfterRemoval = cart.filter((item) => item.id !== id);
    setCart(listAfterRemoval);
  };

  const fetchProducts = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    await setAllProducts([...resp.data]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation removeFromCart={removeFromCart} cart={cart} />

        <Switch>
          <Route path="/product/:id" exact>
            <ProductDetails />
          </Route>
          <Route path="/" exact>
            <Home products={allProducts} addToCart={addToCart} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
