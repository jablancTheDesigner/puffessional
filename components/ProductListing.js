import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

function SkelotonWrapper({ children }) {
  return <div className="col-12 col-md-6 col-lg-4">{children}</div>;
}

export default function ProductListing(props) {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        const error = err.toJSON();
        setError(error.name + ": " + error.message);
      });

    if (resp) {
      setProducts([...resp.data]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container py-5">
        {error && (
          <div className="error text-center bg-danger text-white">{error}</div>
        )}

        {!products && (
          <Skeleton
            count={10}
            height={450}
            wrapper={SkelotonWrapper}
            containerClassName="row gy-4"
          />
        )}
        <div className="row gy-4">
          {products &&
            products.map((product) => {
              return (
                <Product
                  product={product}
                  addToCart={props.addToCart}
                  key={product.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
