import React, { useState } from "react";
import barber1 from "../images/barber1.jpg";
import barber2 from "../images/barber2.jpg";
import { all } from "../api/api";

const Register = (props) => {
  const [barbers, setBarbers] = useState(all.barbers);
  const [activeBarber, setActiveBarber] = useState(barbers[0]);
  const [fade, setFade] = useState(true);
  const [activeTime, setActiveTime] = useState({});

  const chooseBarber = (e) => {
    setActiveBarber(barbers[e.target.id]);
    setFade(true);
  };

  const onChooseTime = (e) => {
    setActiveTime(activeBarber.visits[e.target.id]);
  };

  const isTimeSelected = (id) => {
    if (id === activeTime.id) return "selected-time";
    else return "";
  };

  const onAnimationEnd = () => {
    setFade(false);
  };

  return (
    <div className="register" id="register">
      <h3>ЗАПИСАТИСЯ</h3>
      <div className="form">
        <div className="barbers">
          <div className={`barber-info ${fade ? "fade-in" : ""}`}>
            <img
              className="selected"
              src={activeBarber.image}
              alt={activeBarber.name}
            />
            <div className="right">
              <div className="name">{activeBarber.name}</div>
              <button
                onClick={chooseBarber}
                id={activeBarber.id}
                className="register-btn"
              >
                Обрати {activeBarber.name}
              </button>
            </div>
          </div>
          {barbers
            .filter((barber) => barber.id !== activeBarber.id)
            .map((barber) => (
              <div
                key={barber.id}
                className={`barber-info ${fade ? "fade-in" : ""}`}
              >
                <img src={barber.image} alt={barber.name} />
                <div className="right">
                  <div className="name">{barber.name}</div>
                  <button
                    onClick={chooseBarber}
                    id={barber.id}
                    className="register-btn"
                  >
                    Обрати {barber.name}
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="day"></div>
        <div className="time">
          {activeBarber.schedule.days
            .filter((day) => day.id === 0)[0]
            .visits.filter((visit) => visit.isFree !== false)
            .map((visit) => (
              <button
                onClick={onChooseTime}
                className={isTimeSelected(visit.id)}
                id={visit.id}
                key={visit.id}
              >
                {visit.time}
              </button>
            ))}
        </div>
        <div className="contact-data">
          <label htmlFor="lastName">Прізвище</label>
          <input type="text" name="lastName" id="lastName" />
          <label htmlFor="firstName">Ім'я</label>
          <input type="text" name="firstName" id="firstName" />
          <label htmlFor="phoneNumber">Номер телефону</label>
          <input type="text" name="phoneNumber" id="phoneNumber" />
        </div>
        <div className="submit">
          <button className="submit-btn">Записатись</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
