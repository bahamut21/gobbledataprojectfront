import React from 'react';
import './App.css';
import Formule from './Formulaireinscription/Formule'; // React router dom
import Title from './Formulaireinscription/Title'


function App() {
  return (
    <div className="App">      
      <Title />
      <Formule />   
    </div>
  );
}

export default App;