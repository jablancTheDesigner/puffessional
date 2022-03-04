import axios from "axios";
import React, { useState, useEffect } from "react";
import CategorySingle from "./CategorySingle";

export default function Categories() {
  const [categories, setCategoires] = useState(null);
  const fetchCategories = async () => {
    const resp = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    setCategoires(resp.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container px-4 py-5" id="custom-cards">
      <div className="row  align-items-stretch g-4 py-5">
        {categories &&
          categories.map((category) => {
            return (
              <div className="col">
                <CategorySingle category={category} />;
              </div>
            );
          })}
      </div>
    </div>
  );
}
