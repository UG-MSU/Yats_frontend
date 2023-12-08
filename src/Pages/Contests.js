import Registration from "../Components/Registrat"
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
import React, { useRef, useEffect } from 'react'
import { Suspense } from 'react'
import Msu3D from "../Components/Msu3D"






function Contests() {



    async function getData() {
        const response = await fetch(URL + 'user-contest/');
        const data = await response.json();
        // setResults(data); 
    }
    // getData();

    //console.log(results);

    return (
        <div>
            <div>
                <span>Регистрация</span>
                <span>Создать</span>
            </div>
            <Msu3D/>

            <div>Мои контесты</div>
            <div>
                {/* <ul>
                    {results.map(contest => (
                        <div>
                            <li key={contest.id}>{contest.name}</li>
                        </div>
                    ))}
                </ul> */}
            </div>
        </div>

    )

}

export const contests = () => {
    return (
        <Contests />
    )
}