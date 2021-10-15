import React from 'react';
import { Col, Card, } from 'react-bootstrap';
import './Expert.css'
const Expert = ({expert}) => {
    const {name,experties,img}=expert;
    return (
        <div>
            <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <h4 className="experties-role">_{experties}</h4>
                        </Card.Body>
                    </Card>
         </Col>
        </div>
    );
};

export default Expert;