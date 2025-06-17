// src/components/DashboardCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './dashboardCard.scss';

const DashboardCard = ({ title, value, area, statusClass, customColor }) => {
  return (
    <div
      className={`card ${customColor ? 'card-large' : ''}`}
      style={{ gridArea: area }}
    >
      <h2>{title}</h2>
      <p className={statusClass}>{value}</p>
    </div>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  area: PropTypes.string.isRequired,
  statusClass: PropTypes.string,
  customColor: PropTypes.bool,
};

DashboardCard.defaultProps = {
  statusClass: '',
  customColor: false,
};

export default DashboardCard;
