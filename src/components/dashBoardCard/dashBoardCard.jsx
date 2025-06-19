// src/components/DashboardCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './dashboardCard.scss';

const DashboardCard = ({ title, value, area, statusClass, customColor, customContent }) => {
  return (
    <div
      className={`card ${customColor ? 'card-large' : ''}`}
      data-area={area}
    >
      <h2>{title}</h2>
      
      {customContent ? (
        <div className="card-custom-content">
          {customContent}
        </div>
      ) : (
        <p className={statusClass}>{value}</p>
      )}
    </div>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  area: PropTypes.string.isRequired,
  statusClass: PropTypes.string,
  customColor: PropTypes.bool,
  customContent: PropTypes.node,
};

DashboardCard.defaultProps = {
  statusClass: '',
  customColor: false,
  value: '',
};

export default DashboardCard;