import React from 'react';
import Expert from './../Expert/Expert';
import './Experties.css';
import { Row } from 'react-bootstrap';


const Experties = () => {
    const experts=[
        {   id:1,
            name:'Rober jaclen',
            experties:'Tyre Change Expert',

            img:'https://i.ibb.co/KydFYkq/smiling-mechanic-with-arms-crossed-spanner-1.jpg'
            
        },
        {   id:2,
            name:'Jaclen romero',
            experties:'Front Steering Expert',
            img:'https://i.ibb.co/XyXNbkR/hands-car-mechanic-with-wrench-garage-1.jpg'
        },
        {   id:3,
            name:'Melando Fac',
            experties:'Transmission Expert',
            img:'https://i.ibb.co/LY1mFsp/mechanic-fixing-car-car-service-station-1.jpg'
        },
        {   id:4,
            name:'Faemx Jordan',
            experties:'Engine Expert',
            img:'https://i.ibb.co/Vp6Bm9Z/mechanic-holding-digital-tablet-1.jpg'
        },
        {   id:5,
            name:'Rober jaclen',
            experties:'Alternator Expert',

            img:'https://i.ibb.co/6rqmkZ6/hand-car-mechanic-with-wrench-auto-repair-garage-1.jpg'
        },
        {   id:6,
            name:'Holend donal',
            experties:'Front Axle Expert',

            img:'https://i.ibb.co/2WpJ9Gw/auto-mechanic-working-garage-repair-service-3.jpg'
        },
    ];
    return (
        <div id="experties" className="mb-4">
            <h1 className="mt-5 mb-5 experties-title">Our Experties</h1>
            
            <Row xs={1} md={3} className="g-4">
                
                 {
                    experts.map(expert=><Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                 }
             
          </Row>
        </div>
    );
};

export default Experties;