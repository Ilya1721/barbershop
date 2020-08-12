import React from "react";
import moustaches from "../images/moustaches.png";
import Api from "../api/api";

const Services = (props) => {
  console.log(Api.services);

  return (
    <div className="services" id="services">
      <h3>ПОСЛУГИ</h3>
      <div className="moustaches">
        <img src={moustaches} alt="moustaches" />
      </div>
      <div className="services-container">
        <div className="left-list">
          {Api.services
            .filter((service) => service.id < 3)
            .map((service) => (
              <div key={service.id} className="list-item">
                <div className="name">{service.name}</div>
                <div className="price">{service.price}грн.</div>
              </div>
            ))}
        </div>
        <div className="right-list">
          {Api.services
            .filter((service) => service.id < 3)
            .map((service) => (
              <div key={service.id} className="list-item">
                <div className="name">{service.name}</div>
                <div className="price">{service.price}грн.</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
