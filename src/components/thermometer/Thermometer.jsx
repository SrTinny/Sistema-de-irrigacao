import React from 'react';
import './Thermometer.scss';

const Thermometer = ({ temperature, min = 15, max = 40 }) => {
  // Calcula a porcentagem da temperatura entre min e max
  const percentage = Math.min(100, Math.max(0, ((temperature - min) / (max - min)) * 100));
  
  // Determina a cor do termômetro baseado na temperatura
  let fillColor;
  if (temperature < 20) {
    fillColor = '#4fa8ff'; // Azul para temperaturas baixas
  } else if (temperature >= 20 && temperature <= 30) {
    fillColor = '#78e0a3'; // Verde para temperaturas moderadas
  } else {
    fillColor = '#ff6b6b'; // Vermelho para temperaturas altas
  }

  return (
    <div className="thermometer">
      <div className="thermometer__scale">
        <div className="thermometer__scale-min">{min}°C</div>
        <div className="thermometer__scale-mid">{(min + max) / 2}°C</div>
        <div className="thermometer__scale-max">{max}°C</div>
      </div>
      <div className="thermometer__container">
        <div className="thermometer__glass">
          <div 
            className="thermometer__fill" 
            style={{ 
              height: `${percentage}%`,
              backgroundColor: fillColor
            }} 
          />
        </div>
        <div className="thermometer__bulb" style={{ backgroundColor: fillColor }} />
      </div>
      <div className="thermometer__value">{temperature.toFixed(1)}°C</div>
    </div>
  );
};

export default Thermometer;