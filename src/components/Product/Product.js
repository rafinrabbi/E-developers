import React from 'react';
import './Product.css';

import {Card, Button, Col, Image} from 'react-bootstrap';
const Product = (props) => {
    const {name,price,descreption,lastUpdate,language,image}=props.product;
    return (
        <div className="product">
            <div className="imgg">
                <Col xs={6} md={4}>
                    {/* <Image src="../../images/android-icon-192x192.png" rounded /> */}
                    <Image src={image} rounded />
                </Col>
                <img src="" alt=""/>
            </div>

        
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
            {/* <Card.Img variant="top" src={'https://iili.io/d6Uo5F.jpg'} /> */}
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <h4>${price}</h4>
                <p>Last Update: {lastUpdate}</p>
                <p>{language}</p>
                
                <Button onClick={()=>props.addproduct(props.product)} variant="primary">Enroll now</Button>
            </Card.Body>
        </Card>



        </div>
    );
};

export default Product;