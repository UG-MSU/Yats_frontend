import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
//import React, { useRef, useEffect } from 'react'
import { Suspense } from 'react'
import Msu3D from "../Components/Msu3D"
import React, { Component } from 'react'
import { Link } from 'react-router-dom'



import '../Styles/Contests.css';
import '../Styles/index.css';
import Cookies from "universal-cookie"
import Poisk from '../Components/Poisk'
import { useState, useEffect } from 'react';
import axios from "axios";
const URL = 'http://127.0.0.1:8000/contest/user-submissions/'



let data;
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
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState();

    const [submission, setSubmission] = useState({
        file: null,
        id_task: "",
        id_contest: "",
        language: ""
      });
    
    const handleChange = (event) => {
        console.log(event.target.files);
        setSelectedFile(event.target.files[0])
        console.log(selectedFile)
        var fd = new FormData();
        fd.append('media', selectedFile, selectedFile.name)
        setSubmission({
            file: fd,
            id_task: "1",
            id_contest: "1",
            language: "c++"
        })
        console.log(submission)
    };
    const handleClick = (event) => {
        postData(submission);
    };



    console.log(data);
    //console.log(data["contests"]);

    return (
        <div className="body">
            <input
            type="file"
            name="media"
            onChange={handleChange}
            />


            <button onClick={handleClick}>
                Отправить
            </button>
        </div>
        
        
        
    )
}
export const contest = () => {
    return (
        <Contest />
    )
}