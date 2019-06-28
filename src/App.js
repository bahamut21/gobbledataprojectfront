import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Formule from './Formulaireinscription/Formule'; // React router dom
import Title from './Formulaireinscription/Title'
import Player from './Formulaireinscription/players';

import Home from './Home'; // React router dom
import Login from './Login'; // React router dom
import Result from './Result'; // React router dom
import Notifs from './Notifs'; // React router dom
import Tips from './Tips'; // React router dom
import CbShare from './CbShare';
import Share from './Share';
import Game from './game/Game'; // React router dom



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/notifs' component={Notifs} />
        <Route path='/game' component={Game} />
        <Route path='/game-cb-share' component={CbShare} />
        <Route path='/share' component={Share} />
        <Route path='/login' component={Login} />
        <Route path='/result' component={Result} />
        <Route path='/tips' component={Tips} />
      </Switch>

    </div>
  );
}

export default App;
