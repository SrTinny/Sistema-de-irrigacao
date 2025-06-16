// Painel de Irrigação com simulação em tempo real
import React, { useEffect, useState } from 'react';
import './irrigacaoClient.scss';

const IrrigacaoClient = () => {
  const [umidadeSolo, setUmidadeSolo] = useState(45);
  const [fluxoAgua, setFluxoAgua] = useState(12);
  const [temperatura, setTemperatura] = useState(26);
  const [statusBomba, setStatusBomba] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setUmidadeSolo((prev) => Math.max(20, Math.min(100, prev + (Math.random() * 4 - 2))));
      setFluxoAgua((prev) => Math.max(0, Math.min(20, prev + (Math.random() * 2 - 1))));
      setTemperatura((prev) => Math.max(15, Math.min(40, prev + (Math.random() * 2 - 1))));
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="painel-container">
      <h1>Sistema de Irrigação</h1>
      <div className="painel-dados">
        <div className="painel-card">
          <h2>🌱 Umidade do Solo</h2>
          <p>{umidadeSolo.toFixed(1)}%</p>
        </div>
        <div className="painel-card">
          <h2>💧 Fluxo de Água</h2>
          <p>{fluxoAgua.toFixed(1)} L/min</p>
        </div>
        <div className="painel-card">
          <h2>🌡️ Temperatura</h2>
          <p>{temperatura.toFixed(1)} °C</p>
        </div>
        <div className="painel-card">
          <h2>⚙️ Status da Bomba</h2>
          <p className={statusBomba ? 'ativo' : 'inativo'}>
            {statusBomba ? 'Ativa' : 'Inativa'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IrrigacaoClient;