import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slide = () => {
    

    return (
        <div>
            <Carousel>
            
            <Carousel.Item>
                <img 
                className="d-block w-100  "
                src="https://i.ibb.co/GvhLpJq/luxury-white-car-employee-blue-colored-uniform-works-automobile-salon-1.jpg"
                alt="Second slide"
                
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Our Expert Enginner</h3>
                <p>Front Steering Expert working our system</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100"
                src="https://i.ibb.co/B4J8pFk/female-mechanic-observing-undercarriage-lifted-car-2.jpg"
                />

                <Carousel.Caption>
                <h3>Coolant System Services</h3>
                <p>Our Coolant Expert working a customer car 
                 </p>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
</div>
    );
};

export default Slide;