import React, { useState, useEffect } from "react";
import duration from "dayjs/plugin/duration";
import * as dayjs from "dayjs";

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
      console.log("Changos");
    }, 1000);
  }, []);

  return (
    <div className="Timer">
      <div className="Timer__block">
        <span className="Timer__label">Years</span>
        <span className="Timer__value">{calculateTime.years()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Months</span>
        <span className="Timer__value">{calculateTime.months()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Days</span>
        <span className="Timer__value">{calculateTime.days()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Minutes</span>
        <span className="Timer__value">{calculateTime.minutes()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__label">Seconds</span>
        <span className="Timer__value">{calculateTime.seconds()}</span>
      </div>
      <div className="Timer__block">
        <span className="Timer__summary">
          I arrived to 🇨🇦 <strong>Toronto</strong> on{" "}
          {dayjs(initialTime).format("YYYY/MM/DD HH:MM")}
        </span>
      </div>
    </div>
  );
};
