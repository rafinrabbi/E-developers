import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Course = () => {
    const [courses]=useState(fakeData.slice(0,15));
    const[cart,setCart]=useState([])

    const addproduct= (product) =>{
        const newcart=[...cart,product];
        setCart(newcart);
    }
    return (
        <div className="shop-container">
         


<div class="container">
  <div class="row">
    <div class="col-md-9">
    <div className="course-container">
            {
                courses.map(course=> <Product 
                    addproduct={addproduct}
                    product={course}></Product>)
            }
            </div>
    </div>
    <div class="col-md-3">
    <div className="cart-container">
        <Cart cart={cart}></Cart>
            </div>
    </div>
  </div>
</div>            
            
           
        </div>
    );
};

export default Course;