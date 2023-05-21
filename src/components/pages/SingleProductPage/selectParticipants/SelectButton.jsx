import React, { useContext } from "react";

// import { useState, useEffect, useRef } from "react";

const SelectButton = ({ title }) => {
  // const [adultSelectedValue, setAdultSelectedVaue] = useState();
  // const [childrenSelectedValue, setChildrenSelectedVaue] = useState();
  // const [infantSelectedValue, setInfantSelectedVaue] = useState();
  const arr = [];
  for (let i = 0; i < 100; i++) {
    title === "Adult"
      ? arr.push({ value: i + 1, displayValue: i + 1 })
      : arr.push({ value: i + 0, displayValue: i + 0 });
  }
  const optionData = arr.map((item, idx) => {
    return (
      <option value={item.value} key={idx}>
        {item.displayValue}
      </option>
    );
  });

  // const participatedAdult = useRef(1);
  // const participatedChildren = useRef(0);
  // const participatedInfant = useRef(0);

  // useEffect(() => {
  //   participatedAdult.current = adultSelectedValue;
  //   participatedChildren.current = childrenSelectedValue;
  //   participatedInfant.current = infantSelectedValue;
  // });

  // console.log(participatedAdult.current);
  // const {
  //   setAdultSelectedVaue,
  //   setChildrenSelectedVaue,
  //   setInfantSelectedVaue,
  // } = useContext(ParticipantsContext);
  return (
    <select
      className="select-button"
      // onChange={(e) => {
      //   title === "Adult"
      //     ? setAdultSelectedVaue(e.target.value)
      //     : title === "Children"
      //     ? setChildrenSelectedVaue(e.target.value)
      //     : setInfantSelectedVaue(e.target.value);
      // }}
    >
      {optionData}
    </select>
  );
};

export default SelectButton;
