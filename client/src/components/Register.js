import React, { useState, useEffect } from "react";
import { barbers_get } from "../api/barbers";
import { visits_get, visits_post } from "../api/visits";
import moment from "moment";
import locale from "moment/locale/ru";

const Register = (props) => {
  const [barbers, setBarbers] = useState([]);
  const [activeBarber, setActiveBarber] = useState({});
  const [fade, setFade] = useState(true);
  const [visits, setVisits] = useState([]);
  const [date, setDate] = useState({});
  const [hours, setHours] = useState([...Array(11)].map((x, i) => 9 + i));
  const [minutes, setMinutes] = useState([0, 30]);
  const [chosenHour, setChosenHour] = useState(9);
  const [chosenMinute, setChosenMinute] = useState(0);
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

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

  const onChooseDate = (e) => {
    const chosenDate = new Date(e.target.value);
    setDate(chosenDate);

    const filteredVisits = visits.filter((visit) => {
      const visitDate = new Date(visit.date);

      return (
        visit.barber === activeBarber._id &&
        chosenDate.getFullYear() === visitDate.getFullYear() &&
        chosenDate.getMonth() === visitDate.getMonth() &&
        chosenDate.getDate() === visitDate.getDate()
      );
    });

    if (filteredVisits.length > 0) {
      setHours(
        hours.filter(
          (hour) =>
            !filteredVisits
              .map((visit) => new Date(visit.date).getHours())
              .includes(hour)
        )
      );
    } else {
      setHours([...Array(11)].map((x, i) => 9 + i));
    }
  };

  const onAnimationEnd = () => {
    setFade(false);
  };

  const onSelectHour = (e) => {
    setChosenHour(e.target.value);
  };

  const onSelectMinute = (e) => {
    setChosenMinute(e.target.value);
  };

  const onChangeSecondName = (e) => {
    setSecondName(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let dateTime = date;
    if (chosenHour && chosenMinute && firstName && secondName && phoneNumber) {
      dateTime.setHours(chosenHour);
      dateTime.setMinutes(chosenMinute);
      moment.locale("ru");

      visits_post({
        barber: activeBarber._id,
        date: dateTime,
        client: {
          firstName,
          secondName,
          phoneNumber,
        },
      })
        .then((res) => {
          res.status === 200 &&
            alert(
              `Ви успішно записалися на ${moment(res.data.date).format(
                "DD.MM.YYYY, H:mm"
              )}`
            );
        })
        .catch((err) => console.log(err));
    } else {
      alert("Будь ласка заповніть усі поля");
    }
  };

  return (
    <div className="register" id="register">
      <h3>ЗАПИСАТИСЯ</h3>
      <form onSubmit={onSubmit} className="form">
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
            <select onChange={onSelectHour} name="hours" id="hours">
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <select onChange={onSelectMinute} name="minutes" id="minutes">
              <option value="0">00</option>
              <option value="30">30</option>
            </select>
          </div>
          <label htmlFor="lastName">Прізвище</label>
          <input
            onChange={onChangeSecondName}
            value={secondName}
            type="text"
            name="lastName"
            id="lastName"
          />
          <label htmlFor="firstName">Ім'я</label>
          <input
            onChange={onChangeFirstName}
            value={firstName}
            type="text"
            name="firstName"
            id="firstName"
          />
          <label htmlFor="phoneNumber">Номер телефону</label>
          <input
            onChange={onChangePhoneNumber}
            value={phoneNumber}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
          />
        </div>
        <div className="submit">
          <button type="submit" className="submit-btn">
            Записатись
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
