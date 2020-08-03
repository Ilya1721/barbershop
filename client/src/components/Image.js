import React from "react";
import address from "../images/address.png";
import clock from "../images/clock.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import phone from "../images/phone.png";
import telegram_icon from "../images/telegram_icon.png";
import viber_icon from "../images/viber_icon.png";

const Image = (props) => {
  return (
    <div className="image">
      <div className="overlay">
        <div className="opening">
          МИ ВІДКРИЛИСЬ. ВУЛ.РАСКОВА 13/2. ТУТ ВИ ОТРИМАЄТЕ ЯКІСНІ ПОСЛУГИ ЗА
          ДОСТУПНИМИ ЦІНАМИ.
        </div>
        <div className="subscribe">
          <a href="#" className="subscribe-btn">
            Записатися
          </a>
        </div>
        <div className="contacts" id="contacts">
          <div className="phone">
            <img src={phone} alt="phone" />
            +38 097 099 09 90
          </div>
          <div className="adress">
            <img src={address} alt="address" />
            ул. Свободи, 75
          </div>
          <div className="schedule">
            <img src={clock} alt="clock" />
            Пн – Нд: 10:00 – 20:00
          </div>
          <div className="social">
            <a href="#">
              <img src={telegram_icon} alt="telegram" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={viber_icon} alt="viber" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
