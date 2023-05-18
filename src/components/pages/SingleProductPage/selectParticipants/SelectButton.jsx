import React from "react";

const SelectButton = () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push({ value: i + 1, displayValue: i + 1 });
  }
  const optionData = arr.map((item, idx) => {
    return (
      <option value={item.value} key={idx}>
        {item.displayValue}
      </option>
    );
  });
  return (
    <select name="cars" id="cars" className="select-button">
      {optionData}
    </select>
  );
};

export default SelectButton;
