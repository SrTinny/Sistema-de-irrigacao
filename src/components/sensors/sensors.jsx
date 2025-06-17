// Painel de Sensores
import React, { useEffect, useState } from 'react';
import './sensors.scss';

const sensoresMock = [
  { id: 1, nome: 'Sensor de Umidade', tipo: 'Umidade', status: true },
  { id: 2, nome: 'Sensor de Temperatura', tipo: 'Temperatura', status: true },
  { id: 3, nome: 'Sensor de Pressão', tipo: 'Pressão', status: false },
  { id: 4, nome: 'Sensor de pH', tipo: 'pH', status: true },
];

const Sensors = () => {
  const [sensores, setSensores] = useState([]);

  useEffect(() => {
    // Simula chamada de API
    setTimeout(() => setSensores(sensoresMock), 1000);
  }, []);

  return (
    <div className="sensores-container">
      <h1>Monitoramento de Sensores</h1>
      <div className="sensores-grid">
        {sensores.map((sensor) => (
          <div key={sensor.id} className="sensor-card">
            <h2>{sensor.nome}</h2>
            <p>Tipo: {sensor.tipo}</p>
            <p className={sensor.status ? 'ativo' : 'inativo'}>
              {sensor.status ? 'Funcionando ✅' : 'Desligado ❌'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sensors;
