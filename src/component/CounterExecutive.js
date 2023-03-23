import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ExecutiveContext from '../context/CounterExecutive/ExecutiveContext';


export default function CounterExecutive() {

    const c = useContext(ExecutiveContext);
    const [queue, setQueue] = useState([]);
    const [flag, setFlag] = useState(false);
    const [counterId, setCounterId] = useState();
    
    useEffect(()=>{
        let counterExecutiveId = localStorage.getItem("id");
        axios.get(`http://localhost:8080/CEId?id=${counterExecutiveId}`)
            .then(response => {
                console.log("Counter ID: ")
                console.log(response.data)
                setCounterId(response.data);                
            })
    },[])

    function fetchQueue() {        
        axios.get(`http://localhost:8080/requestingQueue?counterId=${counterId}`)
            .then(response => {
                console.log(response.data)
                setQueue(response.data);
                setFlag(true);
            })
    }
       
        
    
    return (
        <div>
            <button className='btn btn-primary text-center btn-success' onClick={fetchQueue}>Display Queue</button>


            {flag && <table style={{ border: "2px solid black" }}>
                <tbody style={{ border: "2px solid black" }}>
                    <tr>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Token Id</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Service Name</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Service Id</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Waiting Time</th>
                        <th style={{ border: "2px solid black", padding: "10px" }}>Status</th>


                    </tr>
                    {queue.map(token => (
                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ border: "2px solid black", padding: "10px" }}>{token.tokenId}</td>
                            <td style={{ border: "2px solid black", padding: "10px" }}>{token.serviceDescription}</td>
                            <td style={{ border: "2px solid black", padding: "10px" }}>{token.serviceId}</td>
                            <td style={{ border: "2px solid black", padding: "10px" }}>{token.tokenGenerationTime}</td>
                            <td style={{ border: "2px solid black", padding: "10px" }}>{token.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
            {localStorage.getItem("id")}
        </div>
    )
}