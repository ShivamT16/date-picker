import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePick() {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date("2024-09-16"));
  const [endDate, setEndDate] = useState(new Date("2024-09-18"));

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  console.log(new Date("2024-09-16"))

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
    </div>
  );
}