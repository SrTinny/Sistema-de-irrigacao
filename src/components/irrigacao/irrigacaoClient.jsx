// Painel de Irrigação com visual moderno estilo dashboard com Grid nomeado
import React, { useEffect, useState } from 'react';
import './irrigacaoClient.scss';

const IrrigacaoClient = () => {
  const [umidadeSolo, setUmidadeSolo] = useState(72);
  const [fluxoAgua, setFluxoAgua] = useState(4350); // litros
  const [temperatura, setTemperatura] = useState(23);
  const [statusBomba, setStatusBomba] = useState(true);
  const [nivelAgua, setNivelAgua] = useState(58);
  const [proximaIrrigacao, setProximaIrrigacao] = useState(58);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setUmidadeSolo((prev) => Math.max(20, Math.min(100, prev + (Math.random() * 4 - 2))));
      setFluxoAgua((prev) => Math.max(0, Math.min(10000, prev + (Math.random() * 100 - 50))));
      setTemperatura((prev) => Math.max(15, Math.min(40, prev + (Math.random() * 2 - 1))));
      setNivelAgua((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 4 - 2))));
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Irrigation Dashboard</h1>
      <div className="dashboard-grid">
        <div className="card card-large" style={{ gridArea: 'usage' }}>
          <h2>Uso de água</h2>
          <p>{fluxoAgua.toFixed(0)} liters</p>
        </div>
        <div className="card" style={{ gridArea: 'status' }}>
          <h2>Status do Sistema</h2>
          <p className={statusBomba ? 'ativo' : 'inativo'}>{statusBomba ? 'ACTIVE' : 'INACTIVE'}</p>
        </div>
        <div className="card" style={{ gridArea: 'next' }}>
          <h2>Próxima irrigação</h2>
          <p>{proximaIrrigacao.toFixed(0)}%</p>
        </div>
        <div className="card" style={{ gridArea: 'moisture' }}>
          <h2>Níveis de umidade ao longo da semana</h2>
          <p>{umidadeSolo.toFixed(0)}%</p>
        </div>
        <div className="card" style={{ gridArea: 'level' }}>
          <h2>Nível de água</h2>
          <p>{nivelAgua.toFixed(0)}%</p>
        </div>
        <div className="card" style={{ gridArea: 'temp' }}>
          <h2>Temperature</h2>
          <p>{temperatura.toFixed(1)} °C</p>
        </div>
        <div className="card" style={{ gridArea: 'schedule' }}>
          <h2>Agenda de Irrigação</h2>
          <p>Gráfico de barras</p>
        </div>
      </div>
    </div>
  );
};

export default IrrigacaoClient;
