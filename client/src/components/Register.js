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
    },
    {
      id: 1,
      name: "Сергій",
      description:
        "Сергей,знает свое дело на отлично, " +
        "стрижка и борода - это его стихия.",
      image: barber2,
    },
  ];

  const [barbers, setBarbers] = useState(data);
  const [activeBarber, setActiveBarber] = useState(barbers[0]);

  return (
    <div className="register">
      <h3>ЗАПИСАТИСЯ</h3>
      <div className="form">
        <div className="barbers">
          <div className="barber-info">
            <img src={activeBarber.image} alt={activeBarber.name} />
            <div className="right">
              <div className="name">{activeBarber.name}</div>
              <button className="register-btn">
                Обрати {activeBarber.name}
              </button>
            </div>
          </div>
          <div className="barber-info">
            <img src={activeBarber.image} alt={activeBarber.name} />
            <div className="right">
              <div className="name">{activeBarber.name}</div>
              <button className="register-btn">
                Обрати {activeBarber.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
