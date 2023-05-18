import React from "react";
import { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import SelectButton from "./SelectButton";

const SelectParticipantsBadge = ({ item }) => {
  console.log(item);
  const { title, type, value } = item;

  const conditions = {
    button: <SelectButton />,
    date: <DatePicker />,
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
