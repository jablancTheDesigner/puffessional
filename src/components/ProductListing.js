import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

function SkelotonWrapper({ children }) {
  return <div className="col-12 col-md-6 col-lg-4">{children}</div>;
}

export default function ProductListing(props) {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async (category = null) => {
    let url = "https://fakestoreapi.com/products/";
    if (category) {
      url = "https://fakestoreapi.com/products/category/" + category;
    }
    setLoading(true);
    const resp = await axios.get(url);
    if (resp) {
      setLoading(false);
      setProducts(resp.data);
      return resp;
    }
  };

  useEffect(() => {
    const fetchData = async (url, callback) => {
      const resp = await axios.get(url).catch((err) => {
        const error = err.toJSON();
        setError(error.name + ": " + error.message);
      });

      if (resp) {
        setLoading(false);
        callback(resp.data);
        return resp;
      }
    };
    fetchData("https://fakestoreapi.com/products/categories", setCategories);
    fetchData("https://fakestoreapi.com/products", setProducts);
  }, []);

  return (
    <>
      <div className="container py-5">
        {error && (
          <div className="error text-center bg-danger text-white">{error}</div>
        )}

        {categories.length === 0 && (
          <ul class="nav justify-content-center gap-4 mb-4">
            <li className="nav-item">
              <Skeleton height={40} width={100} />
            </li>
            <li className="nav-item">
              <Skeleton height={40} width={100} />
            </li>
            <li className="nav-item">
              <Skeleton height={40} width={100} />
            </li>
            <li className="nav-item">
              <Skeleton height={40} width={100} />
            </li>
            <li className="nav-item">
              <Skeleton height={40} width={100} />
            </li>
          </ul>
        )}

        {categories.length > 0 && (
          <>
            <ul class="nav justify-content-center mb-4">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => fetchCategory()}
                >
                  All
                </a>
              </li>
              {categories.map((link, idx) => {
                return (
                  <li class="nav-item" key={`category-${idx}`}>
                    <a
                      class="nav-link"
                      href="#"
                      onClick={() => fetchCategory(link)}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {loading && (
          <Skeleton
            count={6}
            height={450}
            wrapper={SkelotonWrapper}
            containerClassName="row gy-4"
          />
        )}

        <div className="row gy-5">
          {!loading && (
            <>
              {products.map((product, idx) => {
                return <Product product={product} key={product.id} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
