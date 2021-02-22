import React, { useState, useEffect } from "react";
import duration from "dayjs/plugin/duration";
import * as dayjs from "dayjs";
import confetti from "canvas-confetti";

import "./Timer.css";

const getCalculateTime = (initialTime) => {
  let initial = dayjs(initialTime);
  let now = dayjs();
  let difference = now.diff(initial);

  return difference;
};

export default ({ initialTime }) => {
  dayjs.extend(duration);
  const [calculateTime, setCalculateTime] = useState(
    dayjs.duration(getCalculateTime(initialTime), "milliseconds")
  );

  useEffect(() => {
    setInterval(() => {
      setCalculateTime(
        dayjs.duration(getCalculateTime(initialTime), "milliseconds")
      );
    }, 1000);

    setTimeout(() => {
      const colors = ["#bb0000", "#ffffff"];
      confetti({
        particleCount: 200,
        spread: 100,
        startVelocity: 40,
        colors: colors,
      });
    }, 2000);
  }, []);

  return (
    <div className="Timer">
      <div className="Timer__block">
        <span className="Timer__summary">
          Llegamos a nuestro 🏠 <strong>hogar</strong> el {" "}{dayjs(initialTime).format("DD [del mes] MM [del] YYYY [a las] HH:mm")}
        </span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Años</span>
        <span className="Timer__value">{calculateTime.years()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Meses</span>
        <span className="Timer__value">{calculateTime.months()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">D&iacute;as</span>
        <span className="Timer__value">{calculateTime.days()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Horas</span>
        <span className="Timer__value">{calculateTime.hours()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Minutos</span>
        <span className="Timer__value">{calculateTime.minutes()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Segundos</span>
        <span className="Timer__value">{calculateTime.seconds()}</span>
      </div>
    </div>
  );
};
