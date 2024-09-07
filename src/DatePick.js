import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateContext } from "./Context/DateContext";

export default function DatePick() {
  const {date} = useContext(DateContext);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={date.startDate}
        endDate={date.endDate}
        selectsRange
      />
    </div>
  );
}