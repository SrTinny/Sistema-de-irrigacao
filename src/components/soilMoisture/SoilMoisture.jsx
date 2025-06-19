import React from 'react';
import './SoilMoisture.scss';

const SoilMoisture = ({ moisture }) => {
  // Arredonda o valor para inteiro
  const roundedMoisture = Math.round(moisture);    


  // Determina o status com base na umidade
  const getMoistureStatus = () => {
    if (roundedMoisture < 30) return { text: "SECO", color: "#e74c3c", level: "low" };
    if (roundedMoisture < 60) return { text: "MODERADO", color: "#f39c12", level: "medium" };
    return { text: "IDEAL", color: "#2ecc71", level: "high" };
  };

  const status = getMoistureStatus();

  return (
    <div className="soil-moisture">
      <div className="moisture-display">
        <div className="moisture-value">{roundedMoisture}%</div>
        <div 
          className="moisture-status" 
          style={{ backgroundColor: status.color }}
        >
          {status.text}
        </div>
      </div>
      
      <div className="moisture-visualization">
        <div className="soil-layers">
          <div className="soil-layer layer-1">
            <div 
              className="moisture-fill" 
              style={{ 
                height: `${moisture > 80 ? 100 : moisture * 1.25}%`,
                backgroundColor: status.color
              }}
            />
          </div>
          <div className="soil-layer layer-2">
            <div 
              className="moisture-fill" 
              style={{ 
                height: `${moisture > 60 ? 100 : moisture * 1.66}%`,
                backgroundColor: status.color
              }}
            />
          </div>
          <div className="soil-layer layer-3">
            <div 
              className="moisture-fill" 
              style={{ 
                height: `${moisture > 40 ? 100 : moisture * 2.5}%`,
                backgroundColor: status.color
              }}
            />
          </div>
        </div>
        
        <div className="moisture-indicator">
          <div className="indicator-bar">
            <div 
              className="indicator-fill" 
              style={{ 
                height: `${moisture}%`,
                backgroundColor: status.color
              }}
            />
          </div>
          <div className="indicator-labels">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      
      <div className="moisture-info">
        <div className="info-item">
          <span>Estado:</span>
          <span style={{ color: status.color }}>{status.text}</span>
        </div>
        <div className="info-item">
          <span>Nível:</span>
          <span>{status.level === 'low' ? 'Baixo' : status.level === 'medium' ? 'Moderado' : 'Ideal'}</span>
        </div>
      </div>
    </div>
  );
};

export default SoilMoisture;