import React from 'react';
import './App.css';

import Weather from "./Weather";

export default function App() {
  return( 
    <div className="App">
      <div className="container">
    
     <Weather defaultCity="Limpopo"/>
     <footer>
      This project was coded by Sade Makhubele and is   
      <a href="" target="_blank" rel="noreferrer"> open-sourced in Github
      </a>
     </footer>
     </div>
    </div>
);
}
