import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Kisiler from "./Kisiler";
import { data } from "./mocks/handlers";
import Tuslar from "./Tuslar";
import Arama from "./Arama";

const App = () => {
  const [veri, setVeri] = useState(data);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalVeri, setTotalVeri] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let newArray = [];
    for (let i = 1; i < 10; i++) {
      axios
        .get(`https://swapi.dev/api/people/?page=${i}`)
        .then((response) => {
          newArray = newArray.concat(response.data.results);
          setTotalVeri(newArray);
        })
        .catch((error) => {
          console.log(error, "Hata Bulundu!");
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((response) => {
        setVeri(response.data.results);
      })
      .catch((error) => {
        console.log(error, "Hata Bulundu!");
      });
  }, [pageNumber]);

  useEffect(() => {
    if (search === "") {
      setVeri(data);
    } else {
      let newArray = totalVeri.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      console.log(newArray);
      setVeri(newArray);
    }
  }, [search]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Arama search={search} setSearch={setSearch} />
      <Kisiler veri={veri} />
      <Tuslar pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default App;
