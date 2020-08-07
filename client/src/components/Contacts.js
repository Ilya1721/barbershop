import React from "react";
import address from "../images/address.png";
import clock from "../images/clock.png";
import phone from "../images/phone.png";
import GoogleMapReact from "google-map-react";

const Contacts = (props) => {
  const coords = { lat: 49.4199127, lng: 26.9868166 };
  const zoom = 18;

  return (
    <div className="contacts-footer">
      <h3>КОНТАКТИ</h3>
      <div className="contacts-container">
        <div className="schedule">
          <div className="line">
            <img src={clock} alt="clock" />
            <div className="text">
              ЧАС РОБОТИ:
              <br />
              кожний день
              <br />
              Пн – Нд: 10:00 – 20:00
            </div>
          </div>
          <div className="line">
            <img src={address} alt="address" />
            <div className="text">
              г.Хмельницкий
              <br />
              ул. Свободи, 75
            </div>
          </div>
          <div className="line">
            <img src={phone} alt="phone" />
            <div className="text">+38 097 099 09 90</div>
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBBaOvrFYbWtaqX6f1Yqx2Qj6zXh12fLZw",
            }}
            defaultCenter={coords}
            defaultZoom={zoom}
          ></GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
