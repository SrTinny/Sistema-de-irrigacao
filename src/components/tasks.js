import React from 'react';

const Tasks = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Tarefas</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Tarefa</th>
            <th className="border px-4 py-2">Periódica</th>
            <th className="border px-4 py-2">Criticidade</th>
            <th className="border px-4 py-2">Prioridade</th>
            <th className="border px-4 py-2">Tempo de Computação</th>
            <th className="border px-4 py-2">Período</th>
            <th className="border px-4 py-2">Core</th>
            <th className="border px-4 py-2">Bloqueio</th>
            <th className="border px-4 py-2">Dependente</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Sensor de Umidade</td>
            <td className="border px-4 py-2">Sim</td>
            <td className="border px-4 py-2">Sim</td>
            <td className="border px-4 py-2">Alta</td>
            <td className="border px-4 py-2">10 ms</td>
            <td className="border px-4 py-2">100 ms</td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Não</td>
            <td className="border px-4 py-2">Não</td>
          </tr>
          {/* Adicione mais tarefas conforme necessário */}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
