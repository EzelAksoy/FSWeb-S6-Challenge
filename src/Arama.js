import React, { useState } from "react";
import styled from "styled-components";

function Arama(props) {
  const { search, setSearch } = props;
  return (
    <label htmlFor="search">
      {" "}
      Aramak İstediğiniz Karakter
      <input
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </label>
  );
}

export default Arama;
