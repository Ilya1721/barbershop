import React from "react";
import address from "../images/address.png";
import clock from "../images/clock.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import phone from "../images/phone.png";
import telegram_icon from "../images/telegram_icon.png";
import viber_icon from "../images/viber_icon.png";
import Api from "../api/api";

const Image = (props) => {
  return (
    <div className="image">
      <div className="overlay">
        <div className="opening">
          МИ ВІДКРИЛИСЬ. {Api.contacts.address}. ТУТ ВИ ОТРИМАЄТЕ ЯКІСНІ ПОСЛУГИ
          ЗА ДОСТУПНИМИ ЦІНАМИ.
        </div>
        <div className="subscribe">
          <a href="#register" className="subscribe-btn">
            Записатися
          </a>
        </div>
        <div className="contacts" id="contacts">
          <div className="phone">
            <img src={phone} alt="phone" />
            {Api.contacts.phoneNumber}
          </div>
          <div className="adress">
            <img src={address} alt="address" />
            {Api.contacts.address.toLowerCase()}
          </div>
          <div className="schedule">
            <img src={clock} alt="clock" />
            {Api.contacts.schedule}
          </div>
          <div className="social">
            <a href={Api.contacts.social.telegram}>
              <img src={telegram_icon} alt="telegram" />
            </a>
            <a href={Api.contacts.social.instagram}>
              <img src={instagram} alt="instagram" />
            </a>
            <a href={Api.contacts.social.facebook}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href={Api.contacts.social.viber}>
              <img src={viber_icon} alt="viber" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
