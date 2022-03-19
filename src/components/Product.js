import React from "react";
import styled from "styled-components";
import { addToCart } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Button = styled.button`
  flex: 1;
`;

export default function Product(props) {
  const dispatch = useDispatch();
  const { id, image, title, price, category } = props.product;
  const imageStyling = {
    objectFit: "contain",
    width: "200px",
    height: "200px",
    margin: "1rem auto 12px",
  };

  return (
    <div className="col-12 col-md-6 col-lg-4" key={id}>
      <div className="product card border-0 position-relative">
        <img src={image} style={imageStyling} alt={title} />
        <div className="mt-auto text-center card-body d-flex flex-column p-0">
          <div className="px-2">
            <h2 className="meta price display-4 mt-auto mb-0 text-primary">
              {`$${price.toFixed(2)}`}
            </h2>
            <div className="my-2">
              <Button className="btn btn-primary rounded-0">
                Details <ExpandMoreIcon />
              </Button>
              <Button
                onClick={() => {
                  dispatch(addToCart({ data: props.product }));
                }}
                className="btn btn-dark rounded-0"
              >
                <AddShoppingCartIcon />
              </Button>
            </div>
            <h4 className="header fs-5 fw-bold">{title} </h4>
            <p className="meta fs-6 text-muted text-uppercase">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
