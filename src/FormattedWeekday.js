import React from "react";

export default function FormattedWeekday({ timestamp }) {
  let date = new Date(timestamp * 1000);
  let options = { weekday: "long" };
  return <div>{date.toLocaleDateString(undefined, options)}</div>;
}
