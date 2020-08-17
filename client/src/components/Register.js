import React, { useState, useEffect } from "react";
import { barbers_get } from "../api/barbers";

const Register = (props) => {
  const [barbers, setBarbers] = useState([]);
  const [activeBarber, setActiveBarber] = useState({});
  const [fade, setFade] = useState(true);
  const [activeTime, setActiveTime] = useState({});

  useEffect(() => {
    barbers_get().then((res) => {
      setBarbers(res);
      setActiveBarber(res[0]);
    });
  }, []);

  const chooseBarber = (e) => {
    setActiveBarber(barbers[e.target.id]);
    setFade(true);
  };

  const onChooseTime = (e) => {
    //setActiveTime(activeBarber.visits[e.target.id]);
  };

  const isTimeSelected = (id) => {
    //if (id === activeTime.id) return "selected-time";
    //else return "";
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
                id={barbers.indexOf(activeBarber)}
                className="register-btn"
              >
                Обрати {activeBarber.name}
              </button>
            </div>
          </div>
          {barbers.length > 0 &&
            barbers
              .filter((barber) => barber._id !== activeBarber._id)
              .map((barber) => (
                <div
                  key={barber._id}
                  className={`barber-info ${fade ? "fade-in" : ""}`}
                >
                  <img src={barber.image} alt={barber.name} />
                  <div className="right">
                    <div className="name">{barber.name}</div>
                    <button
                      onClick={chooseBarber}
                      id={barbers.indexOf(barber)}
                      className="register-btn"
                    >
                      Обрати {barber.name}
                    </button>
                  </div>
                </div>
              ))}
        </div>
        <div className="day"></div>
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
