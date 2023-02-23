import React from "react";

export default function CurrentDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let currentDay = days[now.getDay()];
  let currentHour = now.getHours();
  let currentMinutes = now.getMinutes();
  let currentDate = `${currentDay}, ${currentHour}:${currentMinutes}`;

  return currentDate;
}
