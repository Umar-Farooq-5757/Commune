import { useState, useEffect } from "react";
export default function getTime() {
  // Constantly changing time
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timerId);
    };
  }, []);

  let hours = time.getHours() % 12; // to get time in 12 hour format
  hours = hours == 0 ? 12 : hours; // set hour to 12 if 0
  let minutes = time.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let amOrPm = time.getHours() < 12 ? "AM" : "PM";

  return { hours, minutes, amOrPm};
}