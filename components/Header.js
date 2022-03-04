import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: black;
  text-align: center;
  color: white;
`;

export default function Header() {
  return (
    <>
      <HeaderDiv>
        <h2>Header Text</h2>
      </HeaderDiv>
    </>
  );
}
