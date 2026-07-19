import React from "react";

const Random = () => {
  let random = Math.floor(Math.random() * 100) + 1;
  return <div style={{ background: "red" }}>Random: {random}</div>;
};

export default Random;
