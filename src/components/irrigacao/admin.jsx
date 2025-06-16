import React from "react";
import IrrigacaoClient from "./irrigacaoClient"; // base do cliente

const AdminPanel = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Painel Administrativo</h1>

      {/* Reutiliza o conteúdo base do cliente */}
      <IrrigacaoClient />

      {/* Aqui você adiciona funcionalidades extras para o admin */}
      <div className="mt-6 bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">Opções avançadas</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Gerenciar sensores</li>
          <li>Visualizar histórico</li>
          <li>Exportar relatórios</li>
          <li>Editar plantações</li>
        </ul>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
      >
        Sair
      </button>
    </div>
  );
};

export default AdminPanel;
