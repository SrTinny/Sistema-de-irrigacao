import React from 'react';
import './WaterLevel.scss';

const WaterLevel = ({ level }) => {
  return (
    <div className="water-level">
      
      <div className="water-level__container">
        <div className="water-level__tank">
          <div 
            className="water-level__fill" 
            style={{ height: `${level}%` }}
          />
          <div className="water-level__waves">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
          </div>
        </div>
        
        <div className="water-level__scale">
          <div className="scale-mark">100%</div>
          <div className="scale-mark">75%</div>
          <div className="scale-mark">50%</div>
          <div className="scale-mark">25%</div>
          <div className="scale-mark">0%</div>
        </div>
      </div>
      
      <div className="water-level__value">{Math.round(level)}%</div>
    </div>
  );
};

export default WaterLevel;