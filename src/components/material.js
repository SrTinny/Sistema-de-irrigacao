import React from 'react';

const Material = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Material Utilizado</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-white p-4 rounded-lg shadow-md">
          <img src="../img/arduino.jpg" alt="Arduino" className="w-full h-auto mb-4"/>
          <h2 className="text-lg">Arduino</h2>
          <p>Função: Controlador responsável pela conexão dos sensores e atuadores com o código.</p>
        </div>

        <div className="card bg-white p-4 rounded-lg shadow-md">
          <img src="../img/bomba.jpg" alt="Bomba" className="w-full h-auto mb-4"/>
          <h2 className="text-lg">Bomba</h2>
          <p>Função: Controla o fluxo de água da caixa para a mangueira.</p>
        </div>

        <div className="card bg-white p-4 rounded-lg shadow-md">
          <img src="../img/protoboard.jpg" alt="Protoboard" className="w-full h-auto mb-4"/>
          <h2 className="text-lg">Protoboard</h2>
          <p>Função: Facilita a montagem do circuito com conexão temporária dos componentes eletrônicos.</p>
        </div>
      </div>
    </div>
  );
};

export default Material;
