import React from "react";

function CustomButton({ name, clickHandler }) {
  return (
    <div className="flex-wrapper">
      <button className="nextButton" onClick={clickHandler}>
        {name}
      </button>
    </div>
  );
}

export default CustomButton;
