import React, { useState } from "react";
import axios from "axios";
import "./AddServices.css";

function AddServices() {
  const [typeOfService, setTypeOfService] = useState("");
  const [services, setServices] = useState([{ serviceName: "", statusOfService: "activate" }]);
  const [validationErrors, setValidationErrors] = useState([]);
  const [message, setMessage] = useState("");

  const handleServiceChange = (index, event) => {
    const updatedServices = [...services];
    updatedServices[index].serviceName = event.target.value;
    setServices(updatedServices);
  };

  const handleStatusChange = (index, event) => {
    const updatedServices = [...services];
    updatedServices[index].statusOfService = event.target.value;
    setServices(updatedServices);
  };

  const handleAddService = () => {
    setServices([...services, { serviceName: "", statusOfService: "activate" }]);
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { typeOfService, services };
    const errors = [];
    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      if (!service.serviceName) {
        errors.push(`Service ${i + 1} name is required`);
      }
    }
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors([]);
    await axios.post("http://localhost:8080/addService", data).then(response => {
      setMessage("Servies added successfully!");
    })
    .catch(error => {
      console.log(error);
      setMessage("Inserting services failed!");
    });
  };

  return (
    <div>
        <h1  style={{ backgroundColor:"white" , padding:"10px" }}>Add Services</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Type of Service:
            <input
            type="text"
            value={typeOfService}
            onChange={(e) => setTypeOfService(e.target.value)}
            />
        </label>
        {services.map((service, index) => (
            <div key={index}>
            <label>
                Service {index + 1}:
                <input
                type="text"
                value={service.serviceName}
                onChange={(e) => handleServiceChange(index, e)}
                />
            </label>
            {validationErrors.length > 0 && !service.serviceName && (
                <p style={{ color: "red" }}>Service name is required</p>
            )}
            <label>
                Status:
                <select value={service.statusOfService} onChange={(e) => handleStatusChange(index, e)}>
                <option value="activate">Active</option>
                <option value="inactive">Inactive</option>
                </select>
            </label>
            <button style={{ margin:"10px" }} type="button" onClick={() => handleRemoveService(index)}>
                Remove Service
            </button>
            <button type="button" onClick={handleAddService}>
            Add Service
            </button>
            
            </div>
        ))}
        
        <button type="submit">Submit</button>
        </form>
        <br></br>
        {message && <p style={{backgroundColor:"white" , padding:"10px" , color:"green" , textAlign:"center" }}>{message}</p>}
    </div>
  );
}

export default AddServices;
