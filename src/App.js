import React from 'react';
import './App.css';
import Formule from './Formulaireinscription/Formule'; // React router dom
import Title from './Formulaireinscription/Title'
import {Route, Switch} from "react-router-dom"; // React router dom


function App() {
  return (
    <div className="App">
    <Switch>
        <Route path='/Formule' component={Formule} />
      </Switch>
      <Title />
      <Formule />   
    </div>
  );
}

export default App;