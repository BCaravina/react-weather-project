import React from "react";

export default function FormattedTime({ description }) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formattedTime = new Date().toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: userTimeZone,
  });

  return (
    <div>
      <li className="weather-time">{formattedTime}</li>
      {description && <li className="text-capitalize">{description}</li>}
    </div>
  );
}
