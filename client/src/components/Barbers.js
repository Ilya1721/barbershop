import React, { useState, useEffect } from "react";
import { barbers_get } from "../api/barbers";

const Barbers = (props) => {
  const [barbers, setBarbers] = useState([]);
  const [activeBarber, setActiveBarber] = useState(undefined);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    barbers_get().then((res) => {
      setBarbers(res.data);
      setActiveBarber(res.data[0]);
    });
  }, []);

  const onClick = (e) => {
    setActiveBarber(barbers[e.target.id]);
    setFade(true);
  };

  const isSelected = (id) => {
    if (activeBarber && id === activeBarber._id) {
      return "selected";
    } else {
      return "";
    }
  };

  const onAnimationEnd = () => {
    setFade(false);
  };

  return (
    <div className="barbers" id="barbers">
      <h3>ПЕРУКАРІ</h3>
      <div className="moustaches">
        <img
          src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/moustaches.png"
          alt="moustaches"
        />
      </div>
      <div className="barbers-container">
        <div className="buttons">
          {barbers.length > 0 &&
            barbers.map((barber) => (
              <button
                key={barber._id}
                id={barbers.indexOf(barber)}
                onClick={onClick}
                className="select-btn"
              >
                <img
                  src={barber.image}
                  id={barbers.indexOf(barber)}
                  className={isSelected(barber._id)}
                  alt={barber.name}
                />
              </button>
            ))}
        </div>
        <img
          className={`main-img ${fade ? "fade-in" : ""}`}
          onAnimationEnd={onAnimationEnd}
          src={activeBarber && activeBarber.image}
          alt="barber"
        />
        <div
          className={`description ${fade ? "fade-in" : ""}`}
          onAnimationEnd={onAnimationEnd}
        >
          <h5>{activeBarber && activeBarber.name}</h5>
          <p>{activeBarber && activeBarber.description}</p>
          <a href="#subscribe" className="subscribe-btn">
            ЗАПИСАТИСЯ ДО {activeBarber && activeBarber.name.toUpperCase()}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Barbers;
