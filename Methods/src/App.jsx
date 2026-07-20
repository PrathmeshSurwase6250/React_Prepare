import React from "react";
import Props from "./Props";
const App = () => {
  const names = [
    "Prathamesh",
    "Rahul",
    "Amit",
    "Sneha",
    "Priya",
    "Rohan",
    "Neha",
    "Anjali",
    "Vikram",
    "Kiran",
  ];
  let age = 19;
  return (
    <>
      <Props name={names} />
      {/* {names.length === 0 ? (
        <h1>No names available</h1>
      ) : (
        <h1>List of Names:</h1>
      )}
      {names.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
      {age >= 18 && <h1>You are eligible to vote</h1>} */}
    </>
  );
};

export default App;
