import React from 'react';

const Crops = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Plantações</h1>
      <div className="card bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg">Feijão</h2>
        <p>Tipo: Feijão</p>
        <p>Condição Atual: Pronta para colheita</p>
        <p>Temperatura ideal: 25°C - 30°C</p>
        <p>Umidade ideal do solo: 60% - 80%</p>
      </div>
      <div className="card bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg">Milho</h2>
        <p>Tipo: Milho</p>
        <p>Condição Atual: Em crescimento</p>
        <p>Temperatura ideal: 20°C - 30°C</p>
        <p>Umidade ideal do solo: 55% - 65%</p>
      </div>
    </div>
  );
};

export default Crops;
