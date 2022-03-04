import React from "react";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
`;

export default function Product(props) {
  const { id, image, title, price, category } = props.product;
  const ProductImage = styled.div`
    height: 200px;
    width: 100%;
    margin: 0 auto;
    background-image: url(${image});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 1rem;
  `;

  return (
    <div className="col-12 col-md-6 col-lg-4" key={id}>
      <div
        className="product card h-100 p-2"
        onClick={() => props.addToCart(props.product)}
      >
        <ProductImage src={image} alt={title} className="card-image-top" />
        <div className="mt-auto text-center card-body">
          <div className="header">{title} </div>
          <div className="meta price">$ {price}</div>
          <div className="meta">{category}</div>
          <ButtonGroup></ButtonGroup>
        </div>
      </div>
    </div>
  );
}
