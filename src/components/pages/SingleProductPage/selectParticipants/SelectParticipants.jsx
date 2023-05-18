import React from "react";
import SelectButton from "./SelectButton";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectParticipantsActionBtn from "./SelectParticipantsActionBtn";
import SelectParticipantsBadge from "./SelectParticipantsBadge";

const SelectParticipants = () => {
  const [startDate, setStartDate] = useState(new Date());
  let tourTotalAmount = 50000;
  // const
  const dataAssumption = [
    { id: 0, title: "Tour Date", type: "date", value: "abc" },
    { id: 1, title: "Adult", type: "button", value: "abc" },
    { id: 2, title: "Children", type: "button", value: "abc" },
    { id: 3, title: "Infant 0-3 yrs", type: "button", value: "abc" },
    { id: 4, title: "Total Amount", type: "text", value: "abc" },
    // { id: 6, title: "Total Demo", type: "text", value: "abc" },
    // { id: 7, title: "Infant 0-3 yrs", type: "button", value: "abc" },
    // { id: 8, title: "Total Demo2", type: "text", value: "abc" },
  ];

  // const selectParticipantsBadgeArr = dataAssumption.map((item, idx) =>
  //   item === "Tour Date" ? (
  //     <div className="select-participants-badge" key={idx}>
  //       <div className="select-participants-title">{item}</div>
  //       <div className="select-participants-body">
  //         <DatePicker
  //           selected={startDate}
  //           onChange={(date) => setStartDate(date)}
  //           minDate={new Date()}
  //           className="date-picker"
  //         />
  //       </div>
  //     </div>
  //   ) : item === "Total Amount" ? (
  //     <div className="select-participants-badge" key={idx}>
  //       <div className="select-participants-title">{item}</div>
  //       <div className="select-participants-body">{tourTotalAmount}</div>
  //     </div>
  //   ) : (
  //     <div className="select-participants-badge" key={idx}>
  //       <div className="select-participants-title">{item}</div>
  //       <div className="select-participants-body">
  //         <SelectButton />
  //       </div>
  //     </div>
  //   )
  // );

  return (
    <>
      <div className="select-participants-wrapper ">
        <div className="select-participants-heading">Tour Rate</div>
        <div className="table-and-button-wrapper">
          <div className="select-participants-table ">
            {dataAssumption.map((item) => (
              <SelectParticipantsBadge
                item={item}
                itemType={item.type}
                key={item.id}
                mini="sfdsdf"
              />
            ))}
            {/* {selectParticipantsBadgeArr} */}
          </div>
          <div className="select-participants-action-buttons">
            <SelectParticipantsActionBtn text="Book Now" btnColor="#F79621" />
            <SelectParticipantsActionBtn text="More Info" btnColor="#d4d4d4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectParticipants;
