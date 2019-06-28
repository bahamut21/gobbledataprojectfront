import React from 'react';
import {Route, Switch} from "react-router-dom"; // React router dom
import './App.css';
import Home from './Home'; // React router dom
import Login from './Login'; // React router dom
import Result from './Result'; // React router dom
import Game from './Game'; // React router dom
import Tips from './Tips';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/login' component={Login} />
        <Route path='/result' component={Result} />
        <Route path='/tips' component={Tips} />
      </Switch>
    </div>
  );
}

export default App;