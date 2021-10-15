import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { Col, Card, } from 'react-bootstrap';


const Service = ({service}) => {
    const {name,id,price,img,time,sname}=service;
    return (
        <div>

           <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title className="title-color">{sname}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Link to={`/booking/${id}`}>
           <button className="btn btn-warning">Booking {name}</button>
           </Link>
                        </Card.Body>
                    </Card>
         </Col>
        </div>
    );
};

export default Service;