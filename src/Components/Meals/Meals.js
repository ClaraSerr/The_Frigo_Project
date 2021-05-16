import React from "react";
import "./meals.css";

const Meals = (props) => {
  return (
    <div className="results">
      <img src={props.data[1]} className="sprite" />
      <div className="legende">{props.data[0]}</div>
    </div>
  );
};

export default Meals;
