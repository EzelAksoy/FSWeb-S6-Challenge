import React, { useState } from "react";
import styled from "styled-components";
import Detaylar from "./Detaylar";

const Sc_div = styled.div`
  margin: 2px auto;
  padding: 0 5px;
  width: 50vw;
  height: 5vh;
  border: 2.5px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  opacity: 0.7;
`;

function Kisi(props) {
  const { veri } = props;
  const [tıklananKişi, setTıklananKişi] = useState(null);
  return (
    <Sc_div>
      <p> {veri.name}</p>
      <button
        onClick={() => {
          if (veri.name !== tıklananKişi) {
            setTıklananKişi(veri.name);
          } else {
            setTıklananKişi(null);
          }
        }}
      >
        {" "}
        {veri.birth_year}
      </button>
      {tıklananKişi === veri.name && <Detaylar veri={veri} />}
    </Sc_div>
  );
}

export default Kisi;
