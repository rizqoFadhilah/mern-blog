import React from "react";
import "./input.scss";

const Input = ({ Label, ...Rest }) => {
  return (
    // <div className="input-wrapper">
    //   <p className="label">{Label}</p>
    //   <input className="input" {...Rest}></input>
    // </div>

    <form>
      <div className="form-group">
        <label htmlFor="nama">{Label}</label>
        <input {...Rest} className="form-control" />
      </div>
      <div className="col-lg"></div>
      <div className="container"></div>
    </form>
  );
};

export default Input;
