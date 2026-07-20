import React from "react";

const Down = (props) => {
  return (
    <div className="container text-center">
      <br />
      <div className="row">
        <div className="col-4">
          <h5>{props.task}</h5>
        </div>
        <div className="col-4">
          <h5>{props.date}</h5>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Down;
