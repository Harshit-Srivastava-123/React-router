// route/OrderedList.js
import React from "react";
// import "./OrderedList.css";

const OrderedList = ({ list, onCheckboxClick, selectedItems }) => {
  return (
    <ul className="ul">
      {list.map((item, index) => (
        <li key={index} className="ol-li">
          <input
            className="input-checkbox"
            type="checkbox"
            onChange={() => onCheckboxClick(item)}
            checked={selectedItems.includes(item)}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default OrderedList;
