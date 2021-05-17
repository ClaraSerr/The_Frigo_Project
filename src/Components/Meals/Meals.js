import React from "react";
import "./meals.css";

const Meals = (props) => {
  return (
    <div className="results">
      <a className="test" href={"https://www.themealdb.com/meal.php?c="+props.data[2]} target="_blank">
      <img src={props.data[1]} className="sprite" />
      <div className="legende">{props.data[0]}</div>
      </a>
    </div>
  );
};

export default Meals;
