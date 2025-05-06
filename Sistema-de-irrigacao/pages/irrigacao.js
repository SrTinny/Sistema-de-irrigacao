import React, { useState, useEffect } from 'react';

const Irrigacao = () => {
  const [isIrrigationOn, setIsIrrigationOn] = useState(false);
  const [data, setData] = useState({
    consumption: 0,
    level: 50,
    savings: 0,
    temperature: 25,
    soilHumidity: 60,
    plantType: 'Feijão',
  });

  useEffect(() => {
    // Simulação de atualização de dados
    const interval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        consumption: Math.floor(Math.random() * 20) + 1,
        level: Math.floor(Math.random() * 100) + 1,
        savings: Math.floor(Math.random() * 50) + 1,
        temperature: Math.floor(Math.random() * 30) + 12,
        soilHumidity: Math.floor(Math.random() * 3) + 13,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleIrrigation = () => {
    setIsIrrigationOn(!isIrrigationOn);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Sistema de Irrigação</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-white p-4 rounded-lg shadow-md">
          <p>Consumo de Água: {data.consumption} litros</p>
          <p>Nível de Água: {data.level}%</p>
          <p>Economia de Água: {data.savings}%</p>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Sistema de Irrigação</h2>
          <img
            src="irrigation_system_image.jpg"
            alt="Sistema de Irrigação"
            className="w-full h-auto rounded-md"
          />
          <p>Estado Atual: {isIrrigationOn ? 'Ativo' : 'Desligado'}</p>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow-md">
          <p>Temperatura: {data.temperature}°C</p>
          <p>Umidade do Solo: {data.soilHumidity}%</p>
          <p>Tipo de Plantação: {data.plantType}</p>
        </div>
      </div>
      <button
        onClick={toggleIrrigation}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {isIrrigationOn ? 'Desligar Irrigação' : 'Ligar Irrigação'}
      </button>
    </div>
  );
};

export default Irrigacao;
