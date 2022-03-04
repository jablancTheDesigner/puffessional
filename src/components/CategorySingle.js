import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CategorySingle(props) {
  const [count, setCount] = useState(0);

  const fetchCategoryCount = async () => {
    const resp = await axios.get(
      "https://fakestoreapi.com/products/category/" + props.category
    );

    setCount(resp.data.length);
  };

  useEffect(() => {
    fetchCategoryCount();
  });

  return (
    <Link to="/">
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        key={props.category}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-2 text-capitalize mt-auto">
            <span className="fw-bold">{props.category}</span>
            <small className="d-block fw-medium">{count} Items</small>
          </h2>
        </div>
      </div>
    </Link>
  );
}
