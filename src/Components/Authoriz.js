import Registration from "../Components/Registrat"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './Header.js';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
function LoginInput({refLogin, setLogin}){
  return (
      <>
      <div className="login-input">
          <input className="input" placeholder=" Логин" ref={refLogin} onInput={e => setLogin(e.target.value)}></input>
      </div>  
      </>
  );
} 

function PasswordInput({refPassword, setPassword}){
  return (
      <>
      <div className="password-input">
          <input className="input" type="password" placeholder=" Пароль" ref={refPassword} onInput={e => setPassword(e.target.value)}></input>
      </div>
      </>
  );
} 

function SubmitButton({onClick}) {
  return(
    <>
      <button className="submit-button" onClick={onClick}>Войти</button>
    </>
  );
}

function Yet_hadnt_acc () {
  return (
    <>
    <div className="you-had-acc">
        <p className="one-row-text">Еще нет аккаунта?</p> 
        <Nav.Link className="one-row-text"><Link to="/registration">Создать.</Link></Nav.Link>
    </div>
    </>
  )
}

function Authorization() {
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");
  const refLogin = React.createRef(null);
  const refPassword = React.createRef(null);
  function handleClear() {
    refLogin.current.value="";
    refPassword.current.value="";
  }
  function handleClick(){
    handleClear();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "Login": Login,
        "Password": Password
      })
    };
      console.log(Login, Password)
      fetch('http://127.0.0.1', requestOptions) 
      .then(response => console.log(response.json()))
      .then(data => console.log(data))
      .catch(e => {
      //  console.log(e)
      })
  }

  return (
      <>
      <Header/>
      <div className="main-body">
        <div className="reg">
          <h1 className="center-header">Авторизация</h1>
          <div className="data-input">
            <LoginInput refLogin = {refLogin} setLogin={setLogin}/>
            <PasswordInput refPassword = {refPassword} setPassword={setPassword}/>
            <SubmitButton onClick={handleClick}/>
            <Yet_hadnt_acc/>
          </div>
        </div>
      </div>
      </>
  );
}

export const authorization = () => {
    return(
        <div>
            <Authorization/>
        </div>
    )
}