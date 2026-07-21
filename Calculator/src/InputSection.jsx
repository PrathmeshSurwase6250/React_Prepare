import React from "react";

const InputSection = ({ value }) => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        placeholder="Enter expression"
      />
    </>
  );
};

export default InputSection;
