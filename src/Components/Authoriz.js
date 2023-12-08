import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/Registrat.css';
const url = 'http://127.0.0.1:8000/';
 
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
        "username": Login,
        "password": Password
      })
    };
    // const requestOptionsGET = {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    // };
    let resp = "";
    let role;
    fetch(url + '/auth/sign-in', requestOptions) 
    .then(response => response.json())
    .then(data => 
      {
        resp = data["status"]
        console.log(resp)
        if (resp = "ok") {
          // fetch(url + "/contest/has-permission-to-create-contest", requestOptionsGET)
          //               .then(response => 
          //                 response.json())
          //               .then(data => {
          role = data["has_permission"];
          console.log(role)
          //               })
          //               console.log(role)
        } else {
          console.log("")
        }
      }
      )
    .catch(e => {
      console.log(e)
    })
    

    // .then(response => console.log(response.json()))
    // .then(data => { resp = data.json()["error"]
    //                 console.log(data.json()["error"])
    //                 if(resp == "success"){
    //                   fetch(url + "/auth/role", requestOptions)
    //                   .then(response => console.log(response))
    //                   .then(data => {
    //                       role = data.json()["role"];
    //                   })
    //                 }
    // })
    // console.log(role);
  }

  return (
      <>
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