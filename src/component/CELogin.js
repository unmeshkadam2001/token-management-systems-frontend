import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CELogin.css';

export default function CELogin(props) {

    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    function userInput(e) {
        setUsername(e.target.value);
    }

    function passwordInput(e) {
        setPassword(e.target.value);
    }

    function validate() {

        axios
            .post("http://localhost:8080/login",
                { name: username, password: password }, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data)
                console.log(response.data.status);
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                sessionStorage.setItem("accessToken", "true");
                localStorage.setItem("id", response.data.id);
                if (response.data.status === true) {
                    navigate("/CounterExecutive");
                    props.history.replace("/CounterExecutive")
                }
                else {
                    alert("Enter Valid Credentials...:(")
                }
            })



    }

    return (
        <div className='container'>
            <ul className="background">

                <form className='bg-transparent w-25 ' style={{ marginLeft: "37%", border: "3px solid cyan", borderRadius: "50px", marginTop: "15%" }}>
                    <h4 className='text-light'>Login Form</h4>
                    <h5 className='text-light'>Counter Executive</h5>
                    <div className='w-75'>

                        <div className="">
                            <input type="text" placeholder='Enter Username...' onChange={userInput} className="form-control" style={{border:"2px"}} />
                        </div>
                        <div className="">
                            <input type="password" placeholder='Enter Password...' onChange={passwordInput} className="form-control" />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary w-50" onClick={validate}>Login</button>
                </form>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
