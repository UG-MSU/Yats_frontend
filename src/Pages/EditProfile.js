import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const URL = 'http://127.0.0.1:8000/auth/update';
const cookies = new Cookies();

function EditProfile() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    patronymic: "",
    country: "",
    city: "",
    school: "",
    email: "",
  });

  const { username, password, first_name, last_name, patronymic, country, city, school, email } = userData;

  const fetchData = async () => {
    const request = "Token " + cookies.get("token_auth");

    await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": request
      }
    })
    .then(response => response.json())
    .then(data => {
      setUserData({
        username: data["user"]['username'],
        first_name: data["user"]['first_name'],
        last_name: data["user"]['last_name'],
        patronymic: data["user"]['patronymic'],
        country: data["user"]['country'],
        city: data["user"]['city'],
        school: data["user"]['school'],
        email: data["user"]['email']
      });
    })
    .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + cookies.get("token_auth")
      },
      body: JSON.stringify(userData)
    };

    fetch(URL, fetchOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        navigate(-1);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <Container className="Main">
        <form onSubmit={handleSubmit}>
          <div className="Data">
            <div className="Layout">
              <h2>Введите имя:</h2>
              <h2>Введите фамилию:</h2>
              <h2>Введите отчество:</h2>
              <h2>Введите страну:</h2>
              <h2>Введите город:</h2>
              <h2>Введите школу:</h2>
              <h2>Введите почту:</h2>
            </div>
            <div className="Answers">
              <input type="text" name="first_name" value={first_name} onChange={handleChange} />
              <input type="text" name="last_name" value={last_name} onChange={handleChange} />
              <input type="text" name="patronymic" value={patronymic} onChange={handleChange} />
              <input type="text" name="country" value={country} onChange={handleChange} />
              <input type="text" name="city" value={city} onChange={handleChange} />
              <input type="text" name="school" value={school} onChange={handleChange} />
              <input type="text" name="email" value={email} onChange={handleChange} />
            </div>
            <button type="submit">Отправить данные</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export const editprofile = () => {
  return <div> <EditProfile /> </div>;
};