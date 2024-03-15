import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import { contests } from './Pages/Contests';
import { contest } from './Pages/Contest';
import { authorization } from './Components/Authoriz';
import { registration } from './Components/Registrat';
import { profile } from './Pages//Profile';
import { editprofile } from './Pages/EditProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Header/>
      <Routes>
        <Route exact path="/" Component = {App}/>
        <Route exact path="/contests" Component = {contests}/>
        <Route exact path="/contest/:contestId" Component = {contest}/>
        <Route exact path="/authorization" Component = {authorization}/>
        <Route exact path="/registration" Component = {registration}/>
        <Route exact path="/profile" Component={profile}/>
        <Route exact path="/edit-profile" Component={editprofile}/>
      </Routes>
  </HashRouter>
);

reportWebVitals();
