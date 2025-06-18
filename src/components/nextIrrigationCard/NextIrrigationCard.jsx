import React from "react";
import "./NextIrrigationCard.scss";

const NextIrrigationCard = ({ percentage }) => {
  // Cálculo para o círculo de progresso
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Calcular o tempo restante com base na porcentagem
  const hoursLeft = Math.round((100 - percentage) * 0.24);
  const formattedTime = hoursLeft > 0 ? `${hoursLeft}h` : "Em andamento";

  return (
    <div className="next-irrigation-card">
      <div className="next-irrigation-card__header">
        <h2>Próxima Irrigação</h2>
      </div>

      <div className="next-irrigation-card__progress">
        <svg
          className="next-irrigation-card__circle"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="next-irrigation-card__circle-background"
            cx="50"
            cy="50"
            r={radius}
          />
          <circle
            className="next-irrigation-card__circle-progress"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          />
        </svg>

        <div className="next-irrigation-card__value">
          <span>{Math.round(percentage)}%</span>
          <div className="next-irrigation-card__time">{formattedTime}</div>
        </div>
      </div>

      <div className="next-irrigation-card__info">
        <div className="next-irrigation-card__info-item">
          <span>Início:</span>
          <span>14:00</span>
        </div>
        <div className="next-irrigation-card__info-item">
          <span>Duração:</span>
          <span>45 min</span>
        </div>
      </div>
    </div>
  );
};

export default NextIrrigationCard;
