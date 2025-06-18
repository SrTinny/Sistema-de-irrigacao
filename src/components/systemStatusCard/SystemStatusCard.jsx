import React from 'react';
import './SystemStatusCard.scss';

const SystemStatusCard = ({ isActive }) => {
  return (
    <div className="system-status-card">
      <div className="system-status-card__header">
        <h2>System Status</h2>
      </div>
      
      <div className="system-status-card__status">
        <div className={`system-status-card__indicator ${isActive ? 'active' : 'inactive'}`}>
          <div className="system-status-card__led" />
        </div>
        <div className={`system-status-card__label ${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'ACTIVE' : 'INACTIVE'}
        </div>
      </div>
      
      <div className="system-status-card__info">
        <div className="system-status-card__info-item">
          <span>Uptime:</span>
          <span>18d 7h 23m</span>
        </div>
        <div className="system-status-card__info-item">
          <span>Last check:</span>
          <span>2 min ago</span>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusCard;