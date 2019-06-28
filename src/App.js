import React from 'react';
import './App.css';
import Formule from './Formulaireinscription/Formule'; // React router dom
import Title from './Formulaireinscription/Title'
import Player from './Formulaireinscription/players';


function App() {
  return (
    <div className="App">      
      <Title />
      <Formule />  
      <Player />
    </div>
  );
}

export default App;