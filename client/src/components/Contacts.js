import React, { useState, useEffect } from "react";
import address from "../images/address.png";
import clock from "../images/clock.png";
import phone from "../images/phone.png";
import GoogleMapReact from "google-map-react";
import { all } from "../api/api";

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
              {all.contacts.schedule}
            </div>
          </div>
          <div className="line">
            <img src={address} alt="address" />
            <div className="text">
              г.Хмельницкий
              <br />
              {all.contacts.address.toLowerCase()}
            </div>
          </div>
          <div className="line">
            <img src={phone} alt="phone" />
            <div className="text">{all.contacts.phoneNumber}</div>
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
