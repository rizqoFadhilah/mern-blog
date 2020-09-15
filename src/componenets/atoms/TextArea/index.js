import React from "react";
import "./textArea.scss";

const TextArea = ({ ...Rest }) => {
  return (
    <div>
      <textarea className="text-area" {...Rest}></textarea>
    </div>
  );
};

export default TextArea;
