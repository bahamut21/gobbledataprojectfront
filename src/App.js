import React from 'react';
import {Route, Switch} from "react-router-dom"; // React router dom
import './App.css';
import Home from './Home'; // React router dom
import Login from './Login'; // React router dom
import Result from './Result'; // React router dom
import Game from './game/Game'; // React router dom


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/login' component={Login} />
        <Route path='/result' component={Result} />
      </Switch>
    </div>
  );
}

export default App;