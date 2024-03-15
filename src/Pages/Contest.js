import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
//import React, { useRef, useEffect } from 'react'
import { Suspense } from 'react'
import Msu3D from "../Components/Msu3D"
import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../Styles/Contest.css';
import '../Styles/index.css';
import Cookies from "universal-cookie"
import Poisk from '../Components/Poisk'
import { useState, useEffect } from 'react';
import axios from "axios";
const postURL = 'http://127.0.0.1:8000/contest/user-submissions/'
const getTasksURL = 'http://127.0.0.1:8000/contest/contest-tasks/?id='
const getSubmissionsURL = 'http://127.0.0.1:8000/contest/task-submissions/?id='

// function ShowSubmissions(submissions) {
//     console.log(submissions)
//     if ( submissions["submissions"] == null) {
//         return (
//         <div>error</div>
//         )
//     } else if ( submissions["submissions"].count == 0 ) {
//         return (
//         <div>посылок не было</div>
//         )
//     } else {
//         return (
//         <table>
//             <thead>
//                 <tr>
//                 <td>Дата посылки</td>
//                 <td>язык</td>
//                 <td>статус</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {submissions["submissions"].map((submission, index) => (
//                     <tr key={index}>
//                         <td className="date" >submission["timestamp"]</td>
//                         <td className="lang" >submission["lang"]</td>
//                         <td className="status" >submission["status"]</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//         )
//     }
// }

function Contest() {
    console.log(1)
    let {contestId} = useParams();

    const [tasks, setTasks] = useState();
    const [submissions, setSubmissions] = useState(null);
    const [currentTask, setCurrentTask] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCurrentTask(JSON.parse(window.localStorage.getItem('currentTask')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('currentTask', currentTask);
    }, [currentTask]);


    async function getData(id) {
        const cookies = new Cookies();
        const request = "Token " + cookies.get("token_auth");

        await fetch(getTasksURL + String(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": request
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("SUKA");
            console.log(data["tasks"]);
            setTasks(data["tasks"]);
            setLoading(false);
            console.log(tasks)
        })
        .catch(error => {
            console.error("Ошибка загрузки данных профиля:", error);
        });
    }

    useEffect(() => {
        getData(contestId);
    }, [contestId]);

    async function getSubmissions(id) {
        const cookies = new Cookies();
        const request = "Token " + cookies.get("token_auth");

        await fetch(getSubmissionsURL + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": request
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(777);
            console.log(data);
            console.log(888)
            setSubmissions(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Ошибка загрузки данных профиля:", error);
        });
    }


    async function postData(submission) {
        console.log(JSON.stringify(submission))
        const cookies = new Cookies()
        const request = "Token " + cookies.get("token_auth")
        console.log(cookies.get("token_auth"))
        // try {
        console.log("KEK")
        console.log(submission.file)
        fetch(postURL, {
            method: "POST",
            headers: {
                "Authorization": request,
                "id-task": submission.id_task,
                "id-contest": submission.id_contest,
                "language": submission.language
            },
            body: submission.file
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.error('Error:', error));
    };


    const [submission, setSubmission] = useState({
        file: null,
        id_task: "",
        id_contest: "",
        language: ""
      });
    
    const handleChange = async (event) => {
        console.log(event.target.files);
        var fd = new FormData();
        fd.append('media', event.target.files[0], event.target.files[0].name)
        setSubmission({
            file: fd,
            id_task: tasks[currentTask]["id_task"],
            id_contest: contestId,
            language: "c++"
        })
        console.log(submission)
    };
    const handleClick = () => {
        postData(submission);
    };
    
    const updateSubmissions = () => {
        getSubmissions(tasks[currentTask]["id_task"]);
    };



    if (loading) {
        return <p>Загрузка данных...</p>;
    }
    
    console.log(tasks[currentTask]);

    return (
        <div className="body">
            <div className='content'>
                <div className='task-container'>
                    <h2 className="header">{tasks[currentTask]["task_name"]}</h2>
                    <h4>Условие</h4>
                    <h5>{tasks[currentTask]["statement"]}</h5>
                    <div className="upload-container">
                        <input
                        type="file"
                        name="media"
                        onChange={handleChange}
                        />


                        <button className="sub" onClick={handleClick}>
                            Отправить
                        </button>
                        <button className="sub update" onClick={updateSubmissions}>
                            Обновить посылки
                        </button>
                    </div>

                </div>

                <div className='submissions-container'>
                    <h4>Посылки</h4>
                    {/* <ShowSubmissions submissions = { submissions }/> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Наименование</td>
                                <td>Описание</td>
                                <td>Цена</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Имя</td>
                                <td>Характеристики</td>
                                <td>Стоимость</td>
                            </tr>
                            <tr>
                                <td>Имя #2</td>
                                <td>Характеристики</td>
                                <td>Стоимость</td>
                            </tr>
                            <tr>
                                <td>Имя #3</td>
                                <td>Характеристики</td>
                                <td>Стоимость</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='tasks-nav'>
                {tasks.map((task, index) => (
                    <div key={index} className={index == currentTask ? "current nav-but" : "nav-but"} onClick={() => {
                        setCurrentTask(index);
                        console.log(currentTask);
                    }
                    }>{index + 1}</div>
                ))}
            </div>
        </div>
        
        
        
    )
}
export const contest = () => {
    return (
        <Contest />
    )
}