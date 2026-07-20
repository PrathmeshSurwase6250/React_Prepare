import React from "react";
import Heading from "./Heading";
import Down from "./Down";
const App = () => {
  return (
    <>
      <center>
        <Heading />
        <div className="row">
          <div className="col-4">
            <input type="text" placeholder="Enter your task" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              add
            </button>
          </div>
        </div>
        <Down task="Buy Milk" date="4/1/2023" />
        <Down task="Go to the collage" date="4/2/2023" />
      </center>
    </>
  );
};

export default App;
