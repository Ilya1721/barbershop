import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { contacts_get } from "../api/contacts";

const Contacts = (props) => {
  const coords = { lat: 49.4199127, lng: 26.9868166 };
  const zoom = 18;
  const [contacts, setContacts] = useState(undefined);

  useEffect(() => {
    contacts_get()
      .then((res) => {
        setContacts(res[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="contacts-footer">
      <h3>КОНТАКТИ</h3>
      <div className="contacts-container">
        <div className="schedule">
          <div className="line">
            <img
              src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/clock.png"
              alt="clock"
            />
            <div className="text">
              ЧАС РОБОТИ:
              <br />
              кожний день
              <br />
              {contacts && contacts.schedule}
            </div>
          </div>
          <div className="line">
            <img
              src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/address.png"
              alt="address"
            />
            <div className="text">
              г.Хмельницкий
              <br />
              {contacts && contacts.address.toLowerCase()}
            </div>
          </div>
          <div className="line">
            <img
              src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/phone.png"
              alt="phone"
            />
            <div className="text">{contacts && contacts.phoneNumber}</div>
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
