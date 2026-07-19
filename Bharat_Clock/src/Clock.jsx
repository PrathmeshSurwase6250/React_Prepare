import React from "react";

const Clock = () => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <div>
      {date} - {time}
    </div>
  );
};

export default Clock;
