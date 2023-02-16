import React from "react";

const SimpleMiniComponentForTesting = ({ handleBtnClick }) => {
  return (
    <div>
      <button onClick={handleBtnClick}>Test me!</button>
    </div>
  );
};

export default SimpleMiniComponentForTesting;
