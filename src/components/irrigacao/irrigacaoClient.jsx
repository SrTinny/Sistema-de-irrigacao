import React, { useEffect, useState } from 'react';
import DashboardCard from '../dashBoardCard/dashBoardCard';
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
      <h1>Painel de Irrigação</h1>
      <div className="dashboard-grid">
        <DashboardCard
          title="Uso de água"
          value={`${fluxoAgua.toFixed(0)} litros`}
          area="usage"
          customColor
        />
        <DashboardCard
          title="Status do Sistema"
          value={statusBomba ? 'ATIVO' : 'INATIVO'}
          area="status"
          statusClass={statusBomba ? 'ativo' : 'inativo'}
        />
        <DashboardCard
          title="Próxima irrigação"
          value={`${proximaIrrigacao.toFixed(0)}%`}
          area="next"
        />
        <DashboardCard
          title="Umidade do Solo"
          value={`${umidadeSolo.toFixed(0)}%`}
          area="moisture"
        />
        <DashboardCard
          title="Nível de água"
          value={`${nivelAgua.toFixed(0)}%`}
          area="level"
        />
        <DashboardCard
          title="Temperatura"
          value={`${temperatura.toFixed(1)} °C`}
          area="temp"
        />
        <DashboardCard
          title="Agenda de Irrigação"
          value="Gráfico de barras"
          area="schedule"
        />
      </div>
    </div>
  );
};

export default IrrigacaoClient;
