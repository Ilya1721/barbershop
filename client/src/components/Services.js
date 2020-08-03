import React from "react";
import moustaches from "../images/moustaches.png";

const Services = (props) => {
  return (
    <div className="services" id="services">
      <h3>ПОСЛУГИ</h3>
      <div className="moustaches">
        <img src={moustaches} alt="moustaches" />
      </div>
      <div className="services-container">
        <div className="left-list">
          <div className="list-item">
            <div className="name">Чоловіча зачіска</div>
            <div className="price">60грн.</div>
          </div>
          <div className="list-item">
            <div className="name">Жіноча зачіска</div>
            <div className="price">100грн.</div>
          </div>
          <div className="list-item">
            <div className="name">Дитяча зачіска</div>
            <div className="price">30грн.</div>
          </div>
        </div>
        <div className="right-list">
          <div className="list-item">
            <div className="name">Борода</div>
            <div className="price">40грн.</div>
          </div>
          <div className="list-item">
            <div className="name">Стильна зачіска</div>
            <div className="price">150грн.</div>
          </div>
          <div className="list-item">
            <div className="name">Бриття</div>
            <div className="price">20грн.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
