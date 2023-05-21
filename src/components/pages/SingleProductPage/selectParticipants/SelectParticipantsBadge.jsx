import React from "react";
import { useMemo } from "react";
import DatePicker from "react-datepicker";
import SelectButton from "./SelectButton";

const SelectParticipantsBadge = ({ item, changeDate, startDate }) => {
  const { id, title, type, value } = item;

  const conditions = {
    date: (
      <DatePicker
        selected={startDate}
        onChange={(date) => changeDate(date)}
        minDate={new Date()}
        className="date-picker"
      />
    ),
    button: <SelectButton title={title} />,
    text: value || "",
  };

  const comp = useMemo(() => {
    return conditions[type];
  }, [item]);

  return (
    <div className="select-participants-badge">
      <div className="select-participants-title">{title}</div>
      <div className="select-participants-body">{comp}</div>
    </div>
  );
};

export default SelectParticipantsBadge;
