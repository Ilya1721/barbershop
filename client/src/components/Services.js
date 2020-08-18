import React, { useState, useEffect } from "react";
import { services_get } from "../api/services";

const Services = (props) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    services_get()
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="services" id="services">
      <h3>ПОСЛУГИ</h3>
      <div className="moustaches">
        <img
          src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/moustaches.png"
          alt="moustaches"
        />
      </div>
      <div className="services-container">
        <div className="left-list">
          {services !== undefined &&
            services.slice(0, services.length / 2).map((service) => (
              <div key={service._id} className="list-item">
                <div className="name">{service.name}</div>
                <div className="price">{service.price}грн.</div>
              </div>
            ))}
        </div>
        <div className="right-list">
          {services !== undefined &&
            services
              .slice(services.length / 2, services.length)
              .map((service) => (
                <div key={service._id} className="list-item">
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
