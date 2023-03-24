import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CELogin(props) {

    const navigate = useNavigate();
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    

    function userInput(e){
        setUsername(e.target.value);
    }

    function passwordInput(e){
        setPassword(e.target.value);
    }

    function validate(){
        
    axios
      .post("http://localhost:8080/login", 
        {name: username, password: password}, {
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
        if(response.data.status === true){
            navigate("/CounterExecutive");
            props.history.replace("/CounterExecutive")
        }
        else{
            alert("Enter Valid Credentials...:(")
        }
    })

        
        
    }

    return (
        <div style={{ margin:"auto",marginTop:"10%",width:"60%"}}>
        
            <form>       
                <h4>Login Fom</h4>         
                <h5>Counter Executive</h5>
                <div className="form-outline mb-4">
                    <input type="text" placeholder='Enter Username...' id="form2Example1" onChange={userInput} className="form-control" />
                    
                </div>

                
                <div className="form-outline mb-4">
                    <input type="password" placeholder='Enter Password...' id="form2Example2" onChange={passwordInput} className="form-control" />                                        
                </div>

                
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={validate}>Login</button>

            </form>
        </div>
    )
}
