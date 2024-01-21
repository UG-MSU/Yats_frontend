import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
//import React, { useRef, useEffect } from 'react'
import { Suspense } from 'react'
import Msu3D from "../Components/Msu3D"



import '../Styles/Contests.css';
import '../Styles/index.css';
import Cookies from "universal-cookie"
import Poisk from '../Components/Poisk'
import { useState, useEffect } from 'react';
import axios from "axios";
const URL = 'http://127.0.0.1:8000/contest/user-contests/'


const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "pop-up active" : "pop-up"} onClick={() => setActive(false)}>
            <div className="pop-up--content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
let contest; // список контестов
async function getData() {
    const cookies = new Cookies()
    const request = "Token " + cookies.get("token_auth")
    console.log(cookies.get("token_auth"))
    // try {
    console.log("KEK")
    await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": request
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data))
            contest = data
        })
}
await getData()

function Contests() {
    console.log(contest);
    console.log(contest["contests"]);

    const [regActive, setRegActive] = useState(false);
    const [creatActive, setCreatActive] = useState(false);

    const contestsperpage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(JSON.parse(window.localStorage.getItem('currentPage')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);


    return (
        <div className="body">
        <div className="main-container">

            <div className = "my-contests">

                <div className="header">
                    <h2 className="header-title">Мои контесты</h2>
                    <Poisk/>
                </div>
                <div className="content">
                    <div className="contests">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a className={currentPage - 1 ? "page-link" : "page-link none"} aria-label="Previous" onClick={()=>{setCurrentPage(currentPage - 1)}}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link">{currentPage}</a></li>
                                <li class="page-item"><a class="page-link" onClick={()=>{setCurrentPage(currentPage + 1)}}>{currentPage + 1}</a></li>
                                <li class="page-item"><a class="page-link" onClick={()=>{setCurrentPage(currentPage + 2)}}>{currentPage + 2}</a></li>
                                <li class="page-item">
                                <a class="page-link" aria-label="Next" onClick={()=>{setCurrentPage(currentPage + 1)}}>
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="buttons">

                        <div className="button" onClick={() => setRegActive(true)}>Регистрация на контест</div>
                        
                        <div className="button" onClick={() => setCreatActive(true)}>Создать контест</div>

                    </div>
                </div>
            </div>

            
            <div className = "my-contests">

                <div className="header">
                    <h2 className="header-title">Архив</h2>
                </div>
                <div className="content">
                    <div className="contests">
                        <div className="contest">
                            <div className="contest-name">{contest["contests"][0]["name"]}</div>
                        </div>
                        <div className="contest">
                            <div className="contest-name">Contest name</div>
                        </div>
                        <div className="contest">
                            <div className="contest-name">Contest name</div>
                        </div>
                        <div className="contest">
                            <div className="contest-name">Contest name</div>
                        </div>
                        <div className="contest">
                            <div className="contest-name">Contest name</div>
                        </div>
                        <div className="contest">
                            <div className="contest-name">Contest name</div>
                        </div>
                    </div>

                    
                </div>
            </div>

            <Modal active={regActive} setActive={setRegActive}>
                <h4>Регистрация</h4>
                <input placeholder="введите id" className="input"></input>
                <input placeholder="введите пароль" className="input"></input>
                <div className="button pop-up--but">Зарегестрироваться</div>
            </Modal>

            <Modal active={creatActive} setActive={setCreatActive}>
                <h4>Создание</h4>
                <input placeholder="введите название" className="input"></input>
                <input placeholder="введите id" className="input"></input>
                <input placeholder="введите пароль" className="input"></input>
                <div className="button pop-up--but">Создать</div>
            </Modal>

            <Msu3D sizeX={600} sizeY={400} />
        
        </div>
        </div>
    )

}
export const contests = () => {
    return (
        <Contests />
    )
}