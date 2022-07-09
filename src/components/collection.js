import React from "react";
import list from "./data";
import Cards from "./card";
import "./style.css";

const Collection = ({ handleClick }) => {
  return (
    <div className="section">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
    
  );
};

export default Collection