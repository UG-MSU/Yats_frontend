import React from "react";
import "./Profile.css";
import ava from "../Components/Gojo2.gif";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";

function Profile({ userId = 1 }) {
  return (
    <>
      <Header />
      <Container className="Main">
        <div className="Ava_group">
          <img className="Ava" src={ava} />
          <div className="Nick">Сатору Годжо</div>
          <Link className="but" to={`/edit-profile/${userId}`}>
            Редактировать профиль
          </Link>
        </div>
        <div className="Texts">
          <div className="Buttons">
            <Link className="but" to={`/my-contests/${userId}`}>
              Мои контесты
            </Link>
            <Link className="but" to={`/tasks-bank/${userId}`}>
              Банк задач
            </Link>
          </div>
          <div className="Data">
            <div className="Layout">
              <div>Имя:</div>
              <div>Фамилия:</div>
              <div>Отчество:</div>
              <div>Страна:</div>
              <div>Город:</div>
              <div>Школа:</div>
              <div>Почта:</div>
              <div>Пароль:</div>
            </div>
            <div className="Answers">
              <div>Сатору</div>
              <div>Годжо</div>
              <div>~</div>
              <div>Япония</div>
              <div>Токио</div>
              <div>Токийский магический технический колледж</div>
              <div>thestrongestsatorugojo1989@gmail.com</div>
              <div>GojoIsTheBest</div>
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