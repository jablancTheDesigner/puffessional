import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const resp = await axios
        .get("https://fakestoreapi.com/products/categories")
        .catch((err) => {
          console.log(err);
        });
      if (resp.data) {
        setCategories(resp.data);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="container px-4 py-5">
      <div className="row  align-items-stretch g-4 py-5">
        {categories &&
          categories.map((link) => {
            return (
              <div className="nav-item" key={link}>
                <a href="/" className="nav-link">
                  {link}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
