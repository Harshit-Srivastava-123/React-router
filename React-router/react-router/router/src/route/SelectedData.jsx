// route/SelectedData.js
import React from "react";
// import "./SelectedData.css";

const SelectedData = ({ data, onDelete }) => {
  return (
    <div className="third">
      <p className="para" style={{ fontSize: "22px" }}>{data}</p>
      <button onClick={onDelete} className="sel-btn">Delete</button>
      <hr />
    </div>
  );
};

export default SelectedData;
