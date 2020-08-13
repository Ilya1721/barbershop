import React from "react";
import address from "../images/address.png";
import clock from "../images/clock.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import phone from "../images/phone.png";
import telegram_icon from "../images/telegram_icon.png";
import viber_icon from "../images/viber_icon.png";
import { all } from "../api/api";

const Image = (props) => {
  return (
    <div className="image">
      <div className="overlay">
        <div className="opening">
          МИ ВІДКРИЛИСЬ. {all.contacts.address}. ТУТ ВИ ОТРИМАЄТЕ ЯКІСНІ ПОСЛУГИ
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
            {all.contacts.phoneNumber}
          </div>
          <div className="adress">
            <img src={address} alt="address" />
            {all.contacts.address.toLowerCase()}
          </div>
          <div className="schedule">
            <img src={clock} alt="clock" />
            {all.contacts.schedule}
          </div>
          <div className="social">
            <a href={all.contacts.social.telegram}>
              <img src={telegram_icon} alt="telegram" />
            </a>
            <a href={all.contacts.social.instagram}>
              <img src={instagram} alt="instagram" />
            </a>
            <a href={all.contacts.social.facebook}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href={all.contacts.social.viber}>
              <img src={viber_icon} alt="viber" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
