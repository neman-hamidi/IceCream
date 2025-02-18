import React from "react";

const ProgressCircle = ({ percent, Name,  classNames }) => (
  <div>
    <div className="progress-circle">
      <div className={`progress-circle-fill${classNames}`}></div>
      <span className="progress-text">{percent}%</span>
    </div>
    <h3 className="text-center pt-4">{Name}</h3>
  </div>
);
export default ProgressCircle;
