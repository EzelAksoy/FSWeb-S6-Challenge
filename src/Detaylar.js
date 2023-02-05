import React, { useState } from "react";
import styled from "styled-components";

function Detaylar(props) {
  const { veri } = props;
  return (
    <div>
      <p>gender:{veri.gender}</p>
      <p>Heigth:{veri.height}</p>
      <p>Mass:{veri.mass} </p>
      <p>BirthYear:{veri.birth_year}</p>
      <p>Eye Color:{veri.eye_color}</p>
      <p>Hair Color:{veri.hair_color}</p>
      <p>Skin Color:{veri.skin_color} </p>
      {veri.films.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default Detaylar;
