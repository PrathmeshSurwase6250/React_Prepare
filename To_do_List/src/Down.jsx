import React from "react";

const Down = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Enter your task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success">
            add
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <h5>Buy Milk</h5>
        </div>
        <div className="col-4">
          <h5>4/1/2023</h5>
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <h5>Go to the collage </h5>
        </div>
        <div className="col-4">
          <h5>4/2/2023</h5>
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Down;
