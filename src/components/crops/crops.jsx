// Painel de Plantações Atendidas
import React, { useEffect, useState } from 'react';
import './crops.scss';

const plantacoesMock = [
  { id: 1, nome: 'Plantação de Alface', tipo: 'Folhosas', local: 'Estufa 1' },
  { id: 2, nome: 'Plantação de Tomate', tipo: 'Frutíferas', local: 'Estufa 2' },
  { id: 3, nome: 'Plantação de Cenoura', tipo: 'Raízes', local: 'Área Externa' },
  { id: 4, nome: 'Plantação de Pimentão', tipo: 'Frutíferas', local: 'Estufa 3' },
];

const Crops = () => {
  const [plantacoes, setPlantacoes] = useState([]);

  useEffect(() => {
    setTimeout(() => setPlantacoes(plantacoesMock), 1000);
  }, []);

  return (
    <div className="plantacoes-container">
      <h1>Plantações Atendidas pelo Sistema</h1>
      <div className="plantacoes-grid">
        {plantacoes.map((planta) => (
          <div key={planta.id} className="plantacao-card">
            <h2>{planta.nome}</h2>
            <p><strong>Tipo:</strong> {planta.tipo}</p>
            <p><strong>Local:</strong> {planta.local}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crops;