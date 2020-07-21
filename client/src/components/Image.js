import React from "react";
import image from "../images/barbershop_image.jpg";

const Image = (props) => {
  return (
    <div className="image">
      <img src={image} alt="image" />
    </div>
  );
};

export default Image;
