import React from "react";

const App = () => {
  let age = 12;
  return (
    <>
      <h1>
        {age >= 18
          ? "You are eligible to vote"
          : "You are not eligible to vote"}
      </h1>
    </>
  );
};

export default App;
