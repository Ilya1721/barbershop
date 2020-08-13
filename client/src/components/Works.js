import React from "react";
import { all } from "../api/api";

const Works = (props) => {
  return (
    <div className="works" id="works">
      <h3>НАШІ РОБОТИ</h3>
      <div className="photos">
        {all.works.map((work) => (
          <img src={work.photo} key={work.photo} alt="our work" />
        ))}
      </div>
    </div>
  );
};

export default Works;
