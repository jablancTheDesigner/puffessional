import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
`;

export default function Product(props) {
  const { id, image, title, price, category } = props.product;
  const ProductImage = styled.div`
    height: 200px;
    width: 100%;
    margin: 1rem auto;
    background-image: url(${image});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 1rem;
  `;

  return (
    <div className="col-12 col-md-6 col-lg-4" key={id}>
      <div className="product card h-100">
        <ProductImage src={image} alt={title} />
        <div className="mt-auto text-center card-body d-flex flex-column p-0">
          <div className="p-4">
            <div className="meta fs-6 text-muted text-uppercase">
              {category}
            </div>
            <div className="header fs-5 fw-bold">{title} </div>
          </div>

          <div className="meta price display-3 mt-auto mb-3 text-primary">
            {`$${price.toFixed(2)}`}
          </div>
          <ButtonGroup>
            <Button className="btn btn-primary rounded-0">Details</Button>
            <Button
              onClick={() => props.addToCart(props.product)}
              className="btn btn-dark rounded-0"
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
