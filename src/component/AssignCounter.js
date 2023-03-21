import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AssignCounter.css';

function AssignCounter() {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [counterExecutiveName, setCounterExecutiveName] = useState("");
  const [password, setPassword] = useState("");
  const [serviceTypeId, setServiceTypeId] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/getServicesTypes')
      .then(response => {
        setServiceTypes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // check if all fields have a value
    if (!counterExecutiveName || !password || !serviceTypeId) {
      alert("All fields are required");
      return;
    }

    const data = {
      counterExecutiveName: counterExecutiveName,
      password: password,
      serviceTypeId: serviceTypeId
    };
    axios.post('http://localhost:8080/assignCounter', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div style={{ padding:"20px" }}>
      <h1 style={{ backgroundColor:"white" , padding:"10px" }}>Assign counter</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Counter Executive Name:</label>
          <input type="text" className="form-control" value={counterExecutiveName} onChange={(event) => setCounterExecutiveName(event.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input style={{ border:"2px solid black" }} type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <div className="form-group">
          <label>Select a service type:</label>
          <select style={{ border:"2px solid black" }} className="form-control" value={serviceTypeId} onChange={(event) => setServiceTypeId(event.target.value)} required>
            <option value="">Select a service type</option>
            {serviceTypes.map(serviceType => (
              <option key={serviceType.id} value={serviceType.id}>
                {serviceType.typeOfService}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Assign Counter</button>
      </form>
    </div>
  );
}

export default AssignCounter;
