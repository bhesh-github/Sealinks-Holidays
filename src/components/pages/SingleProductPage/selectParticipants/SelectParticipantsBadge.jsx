import React from "react";
import { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import SelectButton from "./SelectButton";

const SelectParticipantsBadge = (item, itemType, mini) => {
  // console.log(mini);
  // console.log("----------" + itemType);
  // console.log("-----" + item.title);
  const { title = "", type = "button", value = "" } = item;
  //   const [startDate, setStartDate] = useState(new Date());

  const conditions = {
    button: <SelectButton />,
    date: <DatePicker />,
    text: value || "",
  };
  //   const conditions = {
  //     button: "textBtn",
  //     date: "date",
  //     text: value || "",
  //   };
  //   const comp = conditions[type];
  const comp = useMemo(() => {
    return conditions[type];
  }, [item]);
  // console.log(type, comp, item, conditions);
  //   const comp =
  //     type === "date" ? (
  //       <DatePicker
  //         selected={startDate}
  //         onChange={(date) => setStartDate(date)}
  //         minDate={new Date()}
  //         className="date-picker"
  //       />
  //     ) : type === "text" && id === 6 ? (
  //       "sdf"
  //     ) : type === "text" ? (
  //       tourTotalAmount
  //     ) : (
  //       //   id === 6 &&
  //       <SelectButton />
  //     );
  return (
    <div className="select-participants-badge">
      <div className="select-participants-title">{title}</div>
      <div className="select-participants-body">{comp}</div>
    </div>
  );
};

export default SelectParticipantsBadge;
