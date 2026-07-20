import React from "react";

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
  return (
    <>
      {names.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
    </>
  );
};

export default App;
