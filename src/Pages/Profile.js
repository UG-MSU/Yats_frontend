import React from "react";
import "../Styles/Profile.css";
import ava from "../Components/Gojo2.gif";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cookies from "universal-cookie"


const URL = 'http://127.0.0.1:8000/auth/update'

let prof;
async function getData() {
  const cookies = new Cookies()
  const request = "Token " + cookies.get("token_auth")
  // console.log("PIZDECC")
  console.log(cookies.get("token_auth"))
  // try {
  // console.log("KEK__")
  await fetch(URL, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": request
      }
  })
      .then(response => response.json())
      .then(data => {
          // console.log("__end__")
          console.log(JSON.stringify(data))
          prof = data
      })
  // console.log("END")
}
await getData()

function Profile() {
  console.log("PIZDEC")
  console.log(prof);
  console.log(prof["user"]['first_name']);
  const getpatron = (patron) => {
    return patron !== "" ? patron : '~';
  };
  return (
    <>
      <Container className="Main">
        <div className="Ava_group">
          <img className="Ava" src={ava} />
          <div className="Nick"> {prof["user"]['username']} </div>
          <Link className="but" to={`/edit-profile/1`}>
            Редактировать профиль
          </Link>
        </div>
        <div className="Texts">
          <div className="Buttons">
            <Link className="but" to={`/my-contests/1`}>
              Мои контесты
            </Link>
            <Link className="but" to={`/tasks-bank/1}`}>
              Банк задач
            </Link>
          </div>
          <div className="Data">
            <div className="Layout">
              <h2>Имя:</h2>
              <h2>Фамилия:</h2>
              <h2>Отчество:</h2>
              <h2>Страна:</h2>
              <h2>Город:</h2>
              <h2>Школа:</h2>
              <h2>Почта:</h2>
            </div>
            <div className="Answers">
              <h2>{prof["user"]['first_name']}</h2>
              <h2>{prof["user"]['last_name']}</h2>
              <h2>{getpatron(prof["user"]['patronymic'])}</h2>
              <h2>{prof["user"]['country']}</h2>
              <h2>{prof["user"]['city']}</h2>
              <h2>{prof["user"]['school']}</h2>
              <h2>{prof["user"]['email']}</h2>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export const profile = () => {
    return(
        <div>
            <Profile/>
        </div>
    )
}