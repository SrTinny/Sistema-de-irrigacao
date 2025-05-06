import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Irrigacao from './components/Irrigacao';
import Login from './components/Login';
import About from './components/About';
import Crops from './components/Crops';
import Sensors from './components/Sensors';
import Material from './components/Material';
import Tasks from './components/Tasks';

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
