// Painel de Materiais Utilizados
import React, { useEffect, useState } from 'react';
import './material.scss';

const listaMateriais = [
  { id: 1, nome: 'ESP32', categoria: 'Eletrônica' },
  { id: 2, nome: 'Sensor de Umidade YL-69', categoria: 'Eletrônica' },
  { id: 3, nome: 'Rele de Estado Sólido', categoria: 'Eletrônica' },
  { id: 4, nome: 'Fonte 5V 2A', categoria: 'Eletrônica' },
  { id: 5, nome: 'Maquete de Plantação com Terra', categoria: 'Maquete' },
  { id: 6, nome: 'Tubulação de irrigação com mangueiras', categoria: 'Maquete' },
];

const Material = () => {
  const [materiais, setMateriais] = useState([]);

  useEffect(() => {
    // Simulação de carregamento
    setTimeout(() => setMateriais(listaMateriais), 1000);
  }, []);

  return (
    <div className="materiais-container">
      <h1>Materiais Utilizados no Projeto</h1>
      <div className="materiais-grid">
        {materiais.map((material) => (
          <div key={material.id} className="material-card">
            <h2>{material.nome}</h2>
            <p>Categoria: {material.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Material;