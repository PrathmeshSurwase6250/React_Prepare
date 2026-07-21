import React from "react";

const Number = ({ leftvalue, middlevalue, rightvalue }) => {
  return (
    <>
      {" "}
      <div className="row ">
        <div className="col-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => console.log(leftvalue)}
          >
            {leftvalue}
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => console.log(middlevalue)}
          >
            {middlevalue}
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-primary"
            onClick={() => console.log(rightvalue)}
          >
            {rightvalue}
          </button>
        </div>{" "}
        <br /> <br />
      </div>
    </>
  );
};

export default Number;
