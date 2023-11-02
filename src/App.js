import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import {registration as Registration} from './Components/Registrat.js';

export default function App() {
  return (
    <div>
      <Header/>
      <Registration/>
    </div>
  );
}
