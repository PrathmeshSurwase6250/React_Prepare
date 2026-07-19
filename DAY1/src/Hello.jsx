import React from "react";

const Hello = () => {
  let name = "Prathmesh";
  let number = 23;

  function greet() {
    return `Hello, ${name}!`;
  }
  return (
    <div>
      {greet()} You are {number} years old.
    </div>
  );
};

export default Hello;
