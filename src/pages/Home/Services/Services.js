import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { Row } from 'react-bootstrap';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div id="services">
           
           <h1 className="mt-5 mb-5 services-title">Our Services</h1>
           
        <Row xs={1} md={3} className="g-4">
                
                {
               services.map(service=><Service
               key={service.id}
               service={service}
               ></Service>)
                }
             
        </Row>
        </div>
    );
};

export default Services;