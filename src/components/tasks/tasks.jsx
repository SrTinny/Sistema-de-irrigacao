// Painel de Tarefas do FreeRTOS
import React, { useEffect, useState } from 'react';
import './tasks.scss';

const tarefasMock = [
  {
    id: 1,
    nome: 'LeituraSensor',
    prioridade: 3,
    estado: 'Executando',
    recursos: ['Queue'],
  },
  {
    id: 2,
    nome: 'ControleBomba',
    prioridade: 2,
    estado: 'Pronto',
    recursos: ['Mutex'],
  },
  {
    id: 3,
    nome: 'Monitoramento',
    prioridade: 1,
    estado: 'Bloqueado',
    recursos: ['EventGroup'],
  },
  {
    id: 4,
    nome: 'InterfaceWeb',
    prioridade: 1,
    estado: 'Suspenso',
    recursos: [],
  },
];

const Tasks = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    setTimeout(() => setTarefas(tarefasMock), 1000);
  }, []);

  return (
    <div className="freertos-container">
      <h1>Tarefas do Sistema FreeRTOS</h1>
      <div className="freertos-grid">
        {tarefas.map((tarefa) => (
          <div key={tarefa.id} className={`freertos-card ${tarefa.estado.toLowerCase()}`}>
            <h2>{tarefa.nome}</h2>
            <p><strong>Prioridade:</strong> {tarefa.prioridade}</p>
            <p><strong>Estado:</strong> {tarefa.estado}</p>
            <p><strong>Recursos:</strong> {tarefa.recursos.length > 0 ? tarefa.recursos.join(', ') : 'Nenhum'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
