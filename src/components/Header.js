import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: #000000;
  padding: 5px;
  color: #fff;
  text-align: center;
  font-size: 12px;
`;

export default function Header() {
  return (
    <>
      <HeaderDiv>One stop shop for all needs!</HeaderDiv>
    </>
  );
}
