import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Irrigacao from './Irrigacao'; // Importe o componente Irrigacao
import Login from './Login';         // Importe o componente Login
import About from './About';         // Importe o componente About
import Crops from './Crops';         // Importe o componente Crops
import Sensors from './Sensors';     // Importe o componente Sensors
import Material from './Material';   // Importe o componente Material
import Tasks from './Tasks';         // Importe o componente Tasks

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/irrigacao">Sistema de Irrigação</a></li>
            <li><a href="/tasks">Tarefas</a></li>
            <li><a href="/sensors">Sensores</a></li>
            <li><a href="/crops">Plantações</a></li>
            <li><a href="/material">Material</a></li>
            <li><a href="/about">Sobre</a></li>
          </ul>
        </nav>
        
        <Switch>
          {/* Defina as rotas */}
          <Route path="/irrigacao" component={Irrigacao} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/crops" component={Crops} />
          <Route path="/sensors" component={Sensors} />
          <Route path="/material" component={Material} />
          <Route path="/tasks" component={Tasks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
