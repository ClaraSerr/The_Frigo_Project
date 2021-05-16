import React from "react";
import "./style.css";
import ComboBox from "../ComboBox/ComboBox";
import axios from "axios";
import ListMeals from "../ListMeals/ListMeals";
import { useState, useEffect } from "react";
/**
 * @author
 * @function Home
 **/

const Home = () => {
  const [listIngredients, setArray] = useState(["", ""]);
  const getingr = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => {
        setArray(response.data.meals);
      });
  };

  useEffect(() => {
    getingr();
  }, [listIngredients]);

  if (listIngredients[0] == "") {
    return <div>Initialise</div>;
  } else {
    return (
      <div class="titl">
        <h1>The Frigo App</h1>
        <ComboBox data={listIngredients} />
      </div>
    );
  }
};

export default Home;
