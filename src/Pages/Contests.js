import Registration from "../Components/Registrat"
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
import '../Styles/Contests.css';
import '../Styles/index.css';
const URL = 'http://127.0.0.1:8000/contest/user-contests/'

function Contests() {
    async function getData() {

        try {
            const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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
        <div className = "body">


            <div className = "my-contests">

                <h2 className="header">Мои контесты</h2>
                <div className="her">
                    <div className = "contests">
                        <div className = "contest">
                            <div className = "contest-name">Contest name</div>
                        </div>
                        <div className = "contest">
                            <div className = "contest-name">Contest name</div>
                        </div>
                        <div className = "contest">
                            <div className = "contest-name">Contest name</div>
                        </div>
                    </div>

                    <div className="buttons">

                        <div>Регистрация на контест</div>
                        <div>Создать контест</div>

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