import React from "react";
import './WaterUsage.scss';

const WaterUsage = ({ usage, maxUsage }) => {
  const percentage = Math.min(100, (usage / maxUsage) * 100);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="water-usage">
      <div className="water-usage__label">Water Usage</div>
      <div className="water-usage__circle-container">
        <svg className="water-usage__circle" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle 
            className="water-usage__circle-background" 
            cx="60" 
            cy="60" 
            r={radius} 
          />
          <circle
            className="water-usage__circle-progress"
            cx="60"
            cy="60"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="water-usage__value">
          <div className="water-usage__value-number">{Math.round(usage)}</div>
          <div className="water-usage__value-unit">liters</div>
        </div>
      </div>
      <div className="water-usage__range">
        <span>0</span>
        <span>{maxUsage.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default WaterUsage;