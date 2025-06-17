// Página Sobre o Sistema de Irrigação
import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre o Sistema de Irrigação Inteligente</h1>

      <section className="about-section">
        <h2>💡 Objetivo</h2>
        <p>
          Nosso sistema tem como principal objetivo automatizar e otimizar o processo de irrigação em pequenas plantações,
          utilizando sensores, microcontroladores (ESP32) e uma interface web para monitoramento em tempo real.
        </p>
      </section>

      <section className="about-section">
        <h2>👨‍💻 Equipe Desenvolvedora</h2>
        <ul>
          <li>João Victor Duarte – Desenvolvedor Fullstack</li>
          <li>Nome 2 – Especialista em Eletrônica</li>
          <li>Nome 3 – Designer de Interface</li>
          <li>Nome 4 – Gerente de Projeto</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🌱 Benefícios</h2>
        <p>
          O sistema reduz o desperdício de água, melhora a produtividade das plantações e oferece um controle prático
          através do celular ou computador. A solução é ideal para agricultores familiares e estudantes de tecnologia.
        </p>
      </section>
    </div>
  );
};

export default About;
