import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  background-color: black;
  text-align: center;
  color: white;
`;

export default function Header() {
  return (
    <>
      <HeaderDiv>Header</HeaderDiv>
    </>
  );
}
