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



async function postData(submission) {
    console.log(JSON.stringify(submission))
    const cookies = new Cookies()
    const request = "Token " + cookies.get("token_auth")
    console.log(cookies.get("token_auth"))
    // try {
    console.log("KEK")
    console.log(submission.file)
    fetch(URL, {
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

function Contest() {

    let { contestId } = useParams();

    const [tasks, setTasks] = useState(null);
    const [currentTask, setCurrentTask] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("dolbaniy_kashel")
        async function getData(id) {
        const cookies = new Cookies();
        const request = "Token " + cookies.get("token_auth");
        try {
            const response = await fetch(getTasksURL + String(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": request
            }
            });
            const data = await response.json();
            console.log("suka")
            console.log(data)
            setTasks(data);
            console.log(tasks)
            setLoading(false);
        } catch (error) {
            console.error("Ошибка загрузки данных профиля:", error);
        }
        }
    
        getData(contestId);
    }, []);

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
        await setSubmission({
            file: fd,
            id_task: "1",
            id_contest: "1",
            language: "c++"
        })
        console.log(submission)
    };
    const handleClick = () => {
        postData(submission);
    };



    if (loading) {
        return <p>Загрузка данных...</p>;
    }
    
    console.log(tasks[currentTask]);

    return (
        <div className="body">
            <div className='task-container'>
                <div className='task-name'>{tasks[currentTask]}</div>
                <input
                type="file"
                name="media"
                onChange={handleChange}
                />


                <button onClick={handleClick}>
                    Отправить
                </button>

            </div>
            <div className='tasks-nav'>
                {tasks["tasks"].map((task, index) => (
                    <div key={index} className={index == currentTask ? "current nav-but" : "nav-but"} onClick={() => {
                        setCurrentTask(index);
                        console.log(currentTask)
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