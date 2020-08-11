import React, { useState } from "react";
import barber1 from "../images/barber1.jpg";
import barber2 from "../images/barber2.jpg";

const Register = (props) => {
  const data = [
    {
      id: 0,
      name: "Артур",
      description:
        "Артур - видит что нужно делать, и делает что велит " +
        "собственное чувство стиля. " +
        "Гармония стрижки и стиля - не заменимая часть имиджа...",
      image: barber1,
      visits: [
        {
          id: 0,
          time: "09:00 - 10:00",
          isFree: true,
        },
        {
          id: 1,
          time: "10:00 - 11:00",
          isFree: false,
        },
        {
          id: 2,
          time: "11:00 - 12:00",
          isFree: false,
        },
        {
          id: 3,
          time: "12:00 - 13:00",
          isFree: true,
        },
        {
          id: 4,
          time: "13:00 - 14:00",
          isFree: true,
        },
        {
          id: 5,
          time: "14:00 - 15:00",
          isFree: false,
        },
        {
          id: 6,
          time: "15:00 - 16:00",
          isFree: true,
        },
        {
          id: 7,
          time: "16:00 - 17:00",
          isFree: true,
        },
        {
          id: 8,
          time: "17:00 - 18:00",
          isFree: true,
        },
        {
          id: 9,
          time: "18:00 - 19:00",
          isFree: false,
        },
      ],
    },
    {
      id: 1,
      name: "Сергій",
      description:
        "Сергей,знает свое дело на отлично, " +
        "стрижка и борода - это его стихия.",
      image: barber2,
      visits: [
        {
          id: 0,
          time: "09:00 - 10:00",
          isFree: true,
        },
        {
          id: 1,
          time: "10:00 - 11:00",
          isFree: false,
        },
        {
          id: 2,
          time: "11:00 - 12:00",
          isFree: true,
        },
        {
          id: 3,
          time: "12:00 - 13:00",
          isFree: false,
        },
        {
          id: 4,
          time: "13:00 - 14:00",
          isFree: false,
        },
        {
          id: 5,
          time: "14:00 - 15:00",
          isFree: true,
        },
        {
          id: 6,
          time: "15:00 - 16:00",
          isFree: true,
        },
        {
          id: 7,
          time: "16:00 - 17:00",
          isFree: false,
        },
        {
          id: 8,
          time: "17:00 - 18:00",
          isFree: true,
        },
        {
          id: 9,
          time: "18:00 - 19:00",
          isFree: false,
        },
      ],
    },
  ];

  const [barbers, setBarbers] = useState(data);
  const [activeBarber, setActiveBarber] = useState(barbers[0]);
  const [fade, setFade] = useState(true);
  const [activeTime, setActiveTime] = useState({});

  const chooseBarber = (e) => {
    setActiveBarber(barbers[e.target.id]);
    setFade(true);
  };

  const onChooseTime = (e) => {
    console.log(e.target.id);
    console.log(activeBarber.visits[e.target.id]);
    setActiveTime(activeBarber.visits[e.target.id]);
    console.log(activeTime);
  };

  const isTimeSelected = (id) => {
    if (id === activeTime.id) return "selected-time";
    else return "";
  };

  const onAnimationEnd = () => {
    setFade(false);
  };

  return (
    <div className="register">
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
        <div className="time">
          {activeBarber.visits
            .filter((visit) => visit.isFree !== false)
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
      </div>
    </div>
  );
};

export default Register;
