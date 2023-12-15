import React from "react";
import "../Styles/Profile.css";
import ava from "../Components/Gojo2.gif";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cookies from "universal-cookie"
import Poisk from '../Components/Poisk'

const URL = 'http://127.0.0.1:8000/user/'

function Profile() {
  async function getData() {
      const cookies = new Cookies()
      const request = "Token " + cookies.get("token_auth")
      console.log(cookies.get("token_auth"))
      try {
          const response = await fetch(URL, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Contests": request
          }
          });
        
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log(data);
          return data;
    
      } catch (error) {
          console.error("Error fetching data:", error);
          return null;
      }
  }
  const data = getData();
  return (
    <>
      <Container className="Main">
        <div className="Ava_group">
          <img className="Ava" src={ava} />
          <div className="Nick"> {{ data }}</div>
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
              <h2>Пароль:</h2>
            </div>
            <div className="Answers">
              <h2>Сатору</h2>
              <h2>Годжо</h2>
              <h2>~</h2>
              <h2>Япония</h2>
              <h2>Токио</h2>
              <h2>Токийский магический технический колледж</h2>
              <h2>thestrongestsatorugojo1989@gmail.com</h2>
              <h2>GojoIsTheBest</h2>
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