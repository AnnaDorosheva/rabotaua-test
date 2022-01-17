import React, { useEffect, useState } from "react";
import s from "./Timer.module.css";

const Timer = (props) => {
  const startTime = new Date(props.time);
  const [day, setDay] = useState(null);
  const [hours, setHours] = useState(null);
  const [minets, setMinets] = useState(null);

  const updateClockFace = (time) => {
    setDay((prev) => pad(Math.floor(time / (1000 * 60 * 60 * 24))));
    setHours((prev) =>
      pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    );
    setMinets((prev) =>
      pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    );
  };

  const pad = (value) => {
    return String(value).padStart(1, "0");
  };

  useEffect(() => {
    const clock = setInterval(() => {
      const nowtTime = Date.now();
      const deltaTime = nowtTime - startTime;
      updateClockFace(deltaTime);
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <section className={s.time}>
      {day >= 1 ? (
        <div>
          <span>
            {day}{" "}
          </span>
          <span>дней назад</span>
        </div>
      ) : null}

      {hours >= 1 && day < 1 ? (
        <div>
          <span>
            {hours}{" "}
          </span>
          <span>часов назад</span>
        </div>
      ) : null}

      {hours < 1 && day < 1 ? (
        <div>
          <span>
            {minets}{" "}
          </span>
          <span>минут назад</span>
        </div>
      ) : null}
    </section>
  );
};

export default Timer;
