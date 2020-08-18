import React, { useState, useEffect } from "react";
import { barbers_get } from "../api/barbers";
import { visits_get } from "../api/visits";
import DateTimePicker from "react-datetime-picker";

const Register = (props) => {
  const [barbers, setBarbers] = useState([]);
  const [activeBarber, setActiveBarber] = useState({});
  const [fade, setFade] = useState(true);
  const [visits, setVisits] = useState([]);
  const [dateTime, setDateTime] = useState({});
  const [hours, setHours] = useState([...Array(11)].map((x, i) => 9 + i));
  const [minutes, setMinutes] = useState([0, 30]);

  useEffect(() => {
    barbers_get()
      .then((res) => {
        setBarbers(res.data);
        setActiveBarber(res.data[0]);
      })
      .catch((err) => console.log(err));

    visits_get()
      .then((res) => {
        setVisits(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const chooseBarber = (e) => {
    setActiveBarber(barbers[e.target.id]);
    setFade(true);
  };

  const onChooseDate = (e) => {};

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
        <div className="contact-data">
          <label htmlFor="lastName">Дата і час</label>
          <div className="date">
            <input onChange={onChooseDate} type="date" />
            <select name="hours" id="hours">
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <select name="minutes" id="minutes">
              <option value="0">00</option>
              <option value="30">30</option>
            </select>
          </div>
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
