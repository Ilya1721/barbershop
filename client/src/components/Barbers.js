import React, { useState } from "react";
import moustaches from "../images/moustaches.png";
import barber1 from "../images/barber1.jpg";
import barber2 from "../images/barber2.jpg";

const Barbers = (props) => {
  const data = [
    {
      id: 1,
      name: "Артур",
      description:
        "Артур - видит что нужно делать, и делает что велит" +
        "собственное чувство стиля." +
        "Гармония стрижки и стиля - не заменимая часть имиджа...",
      image: barber1,
    },
    {
      id: 2,
      name: "Сергій",
      description:
        "Сергей,знает свое дело на отлично," +
        "стрижка и борода - это его стихия.",
      image: barber2,
    },
  ];

  const [barbers, setBarbers] = useState(data);
  const [activeBarber, setActiveBarber] = useState(barbers[0]);

  return (
    <div className="barbers" id="barbers">
      <h3>ПЕРУКАРІ</h3>
      <div className="moustaches">
        <img src={moustaches} alt="moustaches" />
      </div>
      <div className="barbers-container">
        <div className="buttons">
          {barbers.map((barber) => (
            <button key={barber.id} id={barber.id} className="select-btn">
              <img src={barber.image} alt={barber.name} />
            </button>
          ))}
        </div>
        <img className="main-img" src={activeBarber.image} alt="barber" />
        <div className="description">
          <h5>{activeBarber.name}</h5>
          <p>{activeBarber.description}</p>
          <a href="#subscribe" className="subscribe-btn">
            ЗАПИСАТИСЯ ДО {activeBarber.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Barbers;
