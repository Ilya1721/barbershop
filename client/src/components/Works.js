import React, { useState, useEffect } from "react";
import { works_get } from "../api/works";

const Works = (props) => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    works_get()
      .then((res) => {
        setWorks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="works" id="works">
      <h3>НАШІ РОБОТИ</h3>
      <div className="photos">
        {works.length > 0 &&
          works.map((work) => (
            <img src={work.img} key={work.img} alt="our work" />
          ))}
      </div>
    </div>
  );
};

export default Works;
