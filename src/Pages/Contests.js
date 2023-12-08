import Registration from "../Components/Registrat"
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
import '../Styles/Contests.css';
import '../Styles/index.css';
import Cookies from "universal-cookie"
import Poisk from '../Components/Poisk'

const URL = 'http://127.0.0.1:8000/contest/user-contests/'


function Contests() {
    async function getData() {
        const cookies = new Cookies()
        console.log(cookies.get("token_auth"))
        try {
            const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies.get("token_auth")
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

    return(
        <div className="body">
        <div className="main-container">

            <div className = "my-contests">

                <div className="header">
                    <h2 className="header-title">Мои контесты</h2>
                    <Poisk/>
                </div>
                <div className="content">
                    <div className="contests">
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
                        <div className="contest">
                            <div className="contest-name">Contest name</div>
                        </div>
                    </div>

                    <div className="buttons">

                        <div className="button">Регистрация на контест</div>
                        
                        <div className="button">Создать контест</div>

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
                        <div className="contest">
                            <div className="contest-name">Contest name</div>
                        </div>
                    </div>

                    
                </div>
            </div>
        
        </div>
        </div>
        
    )

}

export const contests = () => {
    return(
            <Contests/>
    )
}