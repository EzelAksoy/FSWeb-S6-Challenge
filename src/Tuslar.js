import React, { useState } from "react";
import styled from "styled-components";

const Sc_button = styled.button`
  margin: 10px 0;
  border-width: 5px;
  font-size: 1rem;
  font-family: serif;
`;

function Tuslar(props) {
  const { pageNumber, setPageNumber } = props;
  return [...Array(9).keys()].map((item) => (
    <Sc_button onClick={() => setPageNumber(item + 1)}>{item + 1}</Sc_button>
  ));
}
export default Tuslar;
