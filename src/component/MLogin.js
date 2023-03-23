import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function MLogin() {

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
        if(username === "manager" && password === "manager07"){
            navigate("/ManagerHomePage");
        }
        else{
            alert("Enter Valid Credentials...:(")
        }
    }

  return (
    <div style={{ margin:"auto",marginTop:"10%",width:"60%"}}>
        
    <form>       
        <h4>Login Fom</h4>         
        <h5>Counter Manager</h5>
        <div className="form-outline mb-4">
            <input type="text" placeholder='Enter Username...' id="form2Example1" onChange={userInput} className="form-control" />
            {username}
        </div>

        
        <div className="form-outline mb-4">
            <input type="password" placeholder='Enter Password...' id="form2Example2" onChange={passwordInput} className="form-control" />                    
            {password}
        </div>

        
        <button type="button" className="btn btn-primary mb-9" onClick={validate}>Login</button>

    </form>
</div>

  )
}
