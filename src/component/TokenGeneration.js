import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TokenGeneration() {
  const [servicesData, setServicesData] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/getServicesTypesForTokenGeneration")
      .then((response) => {
        setServicesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);

    const services = servicesData.find((service) => service.typeOfService === selectedType).services;
    setSelectedServices(services);
  };

  const handleServiceChange = (event) => {
    const selectedServiceId = event.target.value;
    setSelectedServiceId(selectedServiceId);
  };

  const generateToken = () => {
    const service = servicesData.find((service) => service.services.find((s) => s.id === parseInt(selectedServiceId)));
    const data = {
      expectedWaitingTime: "00:00",
      tokenGenerationTime: "00:00",
      status: "ACTIVE",
      service: {
        serviceId: service.services.find((s) => s.id === parseInt(selectedServiceId)).id,
        serviceName: service.services.find((s) => s.id === parseInt(selectedServiceId)).serviceName,
        serviceType: {
          id: service.id,
          typeOfService: service.typeOfService
        },
        status: "ACTIVE"
      }
    };
    axios.post("http://localhost:8080/generateToken", data)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error);
      });
  };

  return (
    <div>
      <h1>Token Generation</h1>
      <div style={{ backgroundColor:"white" , alignItems:"center" , marginLeft:"20%" , marginRight:"20%" , borderRadius:"10px"}}>
        <br></br>
        <div style={{ marginLeft:"20%" , marginRight:"20%" , borderRadius:"10px"}}>
            <label htmlFor="typeOfService">Type of Service:</label>
            <select id="typeOfService" name="typeOfService" value={selectedType} onChange={handleTypeChange}>
            <option value="">Select a type of service</option>
            {servicesData.map((service) => (
                <option key={service.id} value={service.typeOfService}>
                {service.typeOfService}
                </option>
            ))}
            </select>
        </div>
        {selectedServices.length > 0 && (
            <div style={{ marginLeft:"20%" , marginRight:"20%" , borderRadius:"20px"}}>
            <label htmlFor="services">Services:</label>
            <select id="services" name="services" value={selectedServiceId} onChange={handleServiceChange}>
                <option value="">Select a service</option>
                {selectedServices.map((service) => (
                <option key={service.id} value={service.id}>
                    {service.serviceName}
                </option>
                ))}
            </select>
            </div>
        )}
        <br></br>
        {selectedServiceId && (
            <div>
            <button style={{ marginBottom:"20px" , marginLeft:"35%" }} onClick={generateToken} className="btn btn-primary">Generate Token</button>
            </div>
        )}
      </div><br></br><br></br>
      {message && <p style={{backgroundColor:"white" , padding:"10px" , color:"green" , textAlign:"center" }}>{message}</p>}
    </div>
  );
}

export default TokenGeneration;
