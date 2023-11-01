import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import { contests } from './Pages/Contests';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Header/>
      <Routes>
        <Route exact path="/" Component = {App}/>
        <Route exact path="/contests" Component = {contests}/>
      </Routes>
  </HashRouter>
);

reportWebVitals();
