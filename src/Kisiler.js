import React from "react";
import styled from "styled-components";
import Kisi from "./Kisi";

function Kisiler(props) {
  const { veri } = props;
  return veri.map((item) => <Kisi veri={item}> </Kisi>);
}

export default Kisiler;
