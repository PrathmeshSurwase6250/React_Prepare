import React from "react";

const Props = ({ name }) => {
  return (
    <div>
      props
      {name.map((name, index) => {
        return (
          <div key={index}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Props;
