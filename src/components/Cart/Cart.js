import React from 'react';
import './Cart.css';
import { Button, Card, variant,idx} from 'react-bootstrap';
const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,val)=> total + val.price ,0);
    return (
        <div>
              <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header><h5>Purchase summary</h5></Card.Header>
                <Card.Body>
                <Card.Title>Course purchased: {cart.length}</Card.Title>
                <Card.Text>
                <h4>Total amount: $ {total}</h4>
                <Button variant="danger">check out</Button>
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            
        </div>
    );
};

export default Cart;