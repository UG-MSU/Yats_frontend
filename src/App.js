import React, { createRef, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
 
function LoginInput({refLogin, setLogin}){
  return (
      <>
      <div className="login-input">
          <input className="input" placeholder="Login" ref={refLogin} onInput={e => setLogin(e.target.value)}></input>
      </div>  
      </>
  );
} 
function PasswordInput({refPassword, setPassword}){
  return (
      <>
      <div className="password-input">
          <input className="input" type="password" placeholder="Password" ref={refPassword} onInput={e => setPassword(e.target.value)}></input>
      </div>
      </>
  );
} 
function SubmitButton({onClick}) {
  return(
    <>
      <button className="submit-button" onClick={onClick}>Submit</button>
    </>
  );
}
function Registration() {
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
      <div className="main-body">
        <div className="reg">
          <h1 className="center-header">Registration</h1>
          <div className="data-input">
            <LoginInput refLogin = {refLogin} setLogin={setLogin}/>
            <PasswordInput refPassword = {refPassword} setPassword={setPassword}/>
            <SubmitButton onClick={handleClick}/>
          </div>
        </div>
      </div>
      </>
  );
}

export default function App() {
  return (
    <div>
      <Registration/>
    </div>
  );
}
