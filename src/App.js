import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'; // React router dom
import Login from './Login'; // React router dom
import Result from './Result'; // React router dom
import CbShare from './CbShare';
import Share from './Share';
import Tips from './Tips';
import Game from './game/Game'; // React router dom


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
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
