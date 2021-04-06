import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import Nav from '../Nav/Nav';

import './Orders.css'

const Orders = () => {

    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);
    const [addOrder, setAddOrder] = useState([]);
    console.log(addOrder)
    useEffect(() => {
        fetch('http://localhost:4400/readOrderProducts?email=' + LoggedInUser.email)
            .then(res => res.json())
            .then(data => setAddOrder(data))
    }, [])

    return (
        <div className='container' >
            <Nav/>

            {
                addOrder.length === 0 && 
                 <Spinner  className="spinner mt-3" animation="border" variant="success" />
            }
            
            {
                
                addOrder.map(order =>
                    <div className=" text-center">
                        
                        <div className="d-flex mt-5 row order-container">

                            <div className="col-md-4 col-sm-1 img-area">
                                <img src={order.product.productUrl} alt="" />
                            </div>

                            <div className="col-md-8 col-sm-1 details-area ">
                                <div className="d-flex row">
                                    <div className=" col-md-6 col-sm-1 user-details">
                                        <p>Name : {order.name}</p>
                                        <p>Email : {order.email}</p>
                                        <p> Date : {order.Date}</p>

                                    </div>
                                    <div className=" col-md-6 col-sm-1 product-details">
                                        <p>Product : {order.product ?. productName }</p>
                                        <p>Price : ${order.product ?. productPrice }</p>
                                        <p>Quantity : {order.product ?. productQuantity }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)

            }

        </div>
    );
};

export default Orders;