import React, { useEffect, useState } from "react";
import DashboardCard from "../dashBoardCard/dashBoardCard";
import "./irrigacaoClient.scss";
import WaterUsage from "../waterUsageCard/WaterUsage";
import NextIrrigationCard from "../nextIrrigationCard/NextIrrigationCard";
import SystemStatusCard from "../systemStatusCard/SystemStatusCard";
import Thermometer from "../thermometer/Thermometer";
import WaterLevel from "../waterLevel/WaterLevel";
import SoilMoisture from "../soilMoisture/SoilMoisture";
import { getDashboardData } from '../../service/api'

const IrrigacaoClient = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDashboardData();
        setDashboardData(response.data);
        setError(null);
      } catch (err) {
        console.error("Falha ao buscar dados do dashboard:", err);
        setError("Não foi possível conectar ao sistema de irrigação.");
      }
    };

    fetchData(); 
    const intervalId = setInterval(fetchData, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <div className="dashboard-container error-message">{error}</div>;
  }

  if (!dashboardData) {
    return <div className="dashboard-container loading-message">Carregando dados do sistema...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Painel de Irrigação</h1>
      <div className="dashboard-grid">
        <div className="water-usage-container" data-area="usage">
          <WaterUsage
            usage={dashboardData.waterUsage.liters}
            maxUsage={dashboardData.waterUsage.maxLiters}
          />
        </div>

        <div className="next-irrigation-container" data-area="next">
          <NextIrrigationCard
            percentage={dashboardData.nextIrrigation.percentage}
          />
        </div>

        <div className="temperature-container" data-area="temp">
          <DashboardCard
            title="Temperatura"
            customContent={
              <Thermometer temperature={dashboardData.temperature.current} />
            }
          />
        </div>

        <div className="system-status-container" data-area="status">
          <SystemStatusCard
            isActive={dashboardData.systemStatus.status === "ACTIVE"}
            uptime={dashboardData.systemStatus.uptime}
            lastCheck={dashboardData.systemStatus.lastCheck}
          />
        </div>

        <div className="level-container" data-area="level">
          <DashboardCard
            title="Nível de água"
            customContent={<WaterLevel level={dashboardData.waterLevel.percentage} />}
          />
        </div>

        <div className="moisture-container" data-area="moisture">
          <DashboardCard
            title="Umidade do Solo"
            customContent={
              <SoilMoisture moisture={dashboardData.soilMoisture.percentage} />
            }
          />
        </div>

        <div className="schedule-container" data-area="schedule">
          <DashboardCard
            title="Agenda de Irrigação"
            customContent={
              <div className="bar-chart">
                {dashboardData.irrigationSchedule.map((bar, index) => (
                  <div
                    key={index}
                    className="bar"
                    style={{ height: `${bar.value}%` }} // Usando porcentagem para melhor escala
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