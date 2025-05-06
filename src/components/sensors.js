import React from 'react';

const Sensors = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Sensores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-white p-4 rounded-lg shadow-md">
          <img src="../img/humidity_sensor_image.png" alt="Sensor de Umidade" className="w-full h-auto mb-4"/>
          <h2 className="text-lg">Sensor de Umidade</h2>
          <p>Função: Mede a umidade do solo.</p>
          <p>Condição Atual: Funcionando normalmente.</p>
        </div>

        <div className="card bg-white p-4 rounded-lg shadow-md">
          <img src="../img/temperature_sensor_image.png" alt="Sensor de Temperatura" className="w-full h-auto mb-4"/>
          <h2 className="text-lg">Sensor de Temperatura</h2>
          <p>Função: Mede a temperatura ambiente.</p>
          <p>Condição Atual: Funcionando normalmente.</p>
        </div>

        <div className="card bg-white p-4 rounded-lg shadow-md">
          <img src="../img/nivel_sensor.webp" alt="Sensor de Nível" className="w-full h-auto mb-4"/>
          <h2 className="text-lg">Sensor de Nível</h2>
          <p>Função: Mede o nível da água.</p>
          <p>Condição Atual: Funcionando normalmente.</p>
        </div>
      </div>
    </div>
  );
};

export default Sensors;
