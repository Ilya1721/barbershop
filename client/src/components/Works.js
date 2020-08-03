import React from "react";
import PropTypes from "prop-types";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";
import work5 from "../images/work5.jpg";
import work6 from "../images/work6.jpg";
import work7 from "../images/work7.jpg";
import work8 from "../images/work8.jpg";
import work9 from "../images/work9.jpg";
import work10 from "../images/work10.jpg";

const Works = (props) => {
  const photos = [
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    work10,
  ];

  return (
    <div className="works" id="works">
      <h3>НАШІ РОБОТИ</h3>
      <div className="photos">
        {photos.map((photo) => (
          <img src={photo} key={photo} alt="our work" />
        ))}
      </div>
    </div>
  );
};

export default Works;
