import React, { useState, useEffect } from 'react';
import moment from 'moment';

const WorldClock = ({ name, timezoneOffset, onDelete }) => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const offsetTime = currentTime.clone().add(timezoneOffset, 'hours');
  const formattedTime = offsetTime.format('HH:mm:ss');

  return (
    <div className="world-clock">
      <div className="clock-header">
        <span>{name}</span>
        <button onClick={() => onDelete(name)}>X</button>
      </div>
      <div className="clock-time">{formattedTime}</div>
    </div>
  );
};

export default WorldClock;
