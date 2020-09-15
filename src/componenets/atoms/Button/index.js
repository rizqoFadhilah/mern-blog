import React from "react";
import "./Button.scss";

const Button = ({ tittle, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {tittle}
    </button>
  );
};

export default Button;
