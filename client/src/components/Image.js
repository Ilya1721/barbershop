import React, { useState, useEffect } from "react";
import { contacts_get } from "../api/contacts";

const Image = (props) => {
  const [contacts, setContacts] = useState(undefined);

  useEffect(() => {
    contacts_get().then((res) => {
      setContacts(res[0]);
    });
  }, []);

  return (
    <div className="image">
      <div className="overlay">
        <div className="opening">
          МИ ВІДКРИЛИСЬ. {contacts && contacts.address}. ТУТ ВИ ОТРИМАЄТЕ ЯКІСНІ
          ПОСЛУГИ ЗА ДОСТУПНИМИ ЦІНАМИ.
        </div>
        <div className="subscribe">
          <a href="#register" className="subscribe-btn">
            Записатися
          </a>
        </div>
        <div className="contacts" id="contacts">
          <div className="phone">
            <img
              src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/phone.png"
              alt="phone"
            />
            {contacts && contacts.phoneNumber}
          </div>
          <div className="adress">
            <img
              src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/address.png"
              alt="address"
            />
            {contacts && contacts.address.toLowerCase()}
          </div>
          <div className="schedule">
            <img
              src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/clock.png"
              alt="clock"
            />
            {contacts && contacts.schedule}
          </div>
          <div className="social">
            <a href={contacts && contacts.social.telegram}>
              <img
                src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/telegram_icon.png"
                alt="telegram"
              />
            </a>
            <a href={contacts && contacts.social.instagram}>
              <img
                src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/instagram.png"
                alt="instagram"
              />
            </a>
            <a href={contacts && contacts.social.facebook}>
              <img
                src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/facebook.png"
                alt="facebook"
              />
            </a>
            <a href={contacts && contacts.social.viber}>
              <img
                src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/viber_icon.png"
                alt="viber"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
