import React, { useEffect, useState } from "react";
import DashboardCard from "../dashBoardCard/dashBoardCard";
import "./irrigacaoClient.scss";
import WaterUsage from "../waterUsageCard/WaterUsage";
import NextIrrigationCard from "../nextIrrigationCard/NextIrrigationCard";
import SystemStatusCard from "../systemStatusCard/SystemStatusCard";
import Thermometer from "../thermometer/Thermometer";
import WaterLevel from "../waterLevel/WaterLevel";

const IrrigacaoClient = () => {
  const [umidadeSolo, setUmidadeSolo] = useState(72);
  const [fluxoAgua, setFluxoAgua] = useState(4350);
  const [temperatura, setTemperatura] = useState(23);
  const [statusBomba, setStatusBomba] = useState(true);
  const [nivelAgua, setNivelAgua] = useState(58);
  const [proximaIrrigacao, setProximaIrrigacao] = useState(58);

  const generateBarChartData = () => {
    return Array.from({ length: 7 }, (_, i) => ({
      day: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][i],
      value: Math.floor(Math.random() * 100) + 20,
    }));
  };

  const [barChartData, setBarChartData] = useState(generateBarChartData());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setUmidadeSolo((prev) =>
        Math.max(20, Math.min(100, prev + (Math.random() * 4 - 2)))
      );
      setFluxoAgua((prev) =>
        Math.max(0, Math.min(10000, prev + (Math.random() * 100 - 50)))
      );
      setTemperatura((prev) =>
        Math.max(15, Math.min(40, prev + (Math.random() * 2 - 1)))
      );
      setNivelAgua((prev) =>
        Math.max(0, Math.min(100, prev + (Math.random() * 4 - 2)))
      );
      setProximaIrrigacao((prev) =>
        Math.max(0, Math.min(100, prev + (Math.random() * 5 - 2.5)))
      );

      if (Math.random() > 0.8) {
        setBarChartData(generateBarChartData());
      }
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Painel de Irrigação</h1>
      <div className="dashboard-grid">
        <div className="water-usage-container" data-area="usage">
          <WaterUsage usage={fluxoAgua} maxUsage={10000} />
        </div>

        <div className="next-irrigation-container" data-area="next">
          <NextIrrigationCard percentage={proximaIrrigacao} />
        </div>

        <div className="temperature-container" data-area="temp">
          <DashboardCard
            title="Temperatura"
            customContent={<Thermometer temperature={temperatura} />}
          />
        </div>

        <div className="system-status-container" data-area="status">
          <SystemStatusCard isActive={statusBomba} />
        </div>

        <div className="level-container" data-area="level">
          <DashboardCard
            title="Nível de água"
            customContent={<WaterLevel level={nivelAgua} />}
          />
        </div>

        <div className="moisture-container" data-area="moisture">
          <DashboardCard
            title="Umidade do Solo"
            value={`${umidadeSolo.toFixed(0)}%`}
          />
        </div>

        <div className="schedule-container" data-area="schedule">
          <DashboardCard
            title="Agenda de Irrigação"
            customContent={
              <div className="bar-chart">
                {barChartData.map((bar, index) => (
                  <div
                    key={index}
                    className="bar"
                    style={{ height: `${bar.value}px` }}
                    data-value={bar.day}
                  />
                ))}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default IrrigacaoClient;